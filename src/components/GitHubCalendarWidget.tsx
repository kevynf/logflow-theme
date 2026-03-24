import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

type Props = {
  username: string;
  errorMessage: string;
};
type DayName = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

const lightTheme = ["#ebedf0", "#ddf4ff", "#9ecbff", "#54aeff", "#0969da"];
const darkTheme = ["#21262d", "#0e4429", "#006d32", "#26a641", "#39d353"];
const baseYear: number | "last" = "last";
const baseBlockSize = 12;
const baseBlockMargin = 2;
const baseFontSize = 12;
const baseShowTotalCount = true;
const baseShowColorLegend = true;
const baseShowWeekdayLabels: DayName[] = ["mon", "wed", "fri"];

export default function GitHubCalendarWidget({
  username,
  errorMessage,
}: Props) {
  const [isDark, setIsDark] = useState(false);
  const calendarProps = { year: baseYear };

  useEffect(() => {
    const syncTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    syncTheme();
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="gh-calendar-root">
      <div className="gh-calendar-viewport">
        <div className="gh-calendar-track">
          <GitHubCalendar
            username={username}
            {...calendarProps}
            colorScheme={isDark ? "dark" : "light"}
            blockSize={baseBlockSize}
            blockMargin={baseBlockMargin}
            fontSize={baseFontSize}
            showTotalCount={baseShowTotalCount}
            showColorLegend={baseShowColorLegend}
            showWeekdayLabels={baseShowWeekdayLabels}
            errorMessage={errorMessage}
            theme={{
              light: lightTheme,
              dark: darkTheme,
            }}
          />
        </div>
      </div>
    </div>
  );
}
