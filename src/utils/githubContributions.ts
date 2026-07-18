import { get } from "node:https";

export type GitHubContribution = {
  date: string;
  count: number;
  level: number;
};

export type GitHubContributionData = {
  contributions: GitHubContribution[];
  totalCount: number;
};

const API_URL = "https://github-contributions-api.jogruber.de/v4";
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function isContribution(value: unknown): value is GitHubContribution {
  if (!value || typeof value !== "object") return false;

  const contribution = value as Record<string, unknown>;
  return (
    typeof contribution.date === "string" &&
    DATE_PATTERN.test(contribution.date) &&
    typeof contribution.count === "number" &&
    contribution.count >= 0 &&
    typeof contribution.level === "number" &&
    Number.isInteger(contribution.level) &&
    contribution.level >= 0 &&
    contribution.level <= 4
  );
}

export async function fetchGitHubContributions(
  username: string,
): Promise<GitHubContributionData> {
  const url = `${API_URL}/${encodeURIComponent(username)}?y=last`;
  const payload = await new Promise<unknown>((resolve, reject) => {
    const request = get(
      url,
      {
        agent: false,
        headers: {
          Accept: "application/json",
          Connection: "close",
        },
      },
      (response) => {
        let body = "";
        response.setEncoding("utf8");
        response.on("data", (chunk: string) => {
          body += chunk;
        });
        response.on("end", () => {
          if (response.statusCode !== 200) {
            reject(
              new Error(
                `GitHub contribution API returned ${response.statusCode ?? "unknown"}`,
              ),
            );
            return;
          }

          try {
            resolve(JSON.parse(body));
          } catch {
            reject(new Error("GitHub contribution API returned invalid JSON"));
          }
        });
      },
    );

    request.setTimeout(10_000, () => {
      request.destroy(new Error("GitHub contribution API timed out"));
    });
    request.on("error", reject);
  });

  if (!payload || typeof payload !== "object") {
    throw new Error("GitHub contribution API returned an invalid payload");
  }

  const contributions = (payload as Record<string, unknown>).contributions;
  if (
    !Array.isArray(contributions) ||
    contributions.length === 0 ||
    !contributions.every(isContribution)
  ) {
    throw new Error("GitHub contribution API returned invalid contributions");
  }

  return {
    contributions,
    totalCount: contributions.reduce(
      (total, contribution) => total + contribution.count,
      0,
    ),
  };
}
