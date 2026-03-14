import { useEffect, useRef, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

type Props = {
	username: string;
	errorMessage: string;
};
type DayName = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

const lightTheme = ['#ebedf0', '#ddf4ff', '#9ecbff', '#54aeff', '#0969da'];
const darkTheme = ['#21262d', '#0e4429', '#006d32', '#26a641', '#39d353'];
const baseYear: number | 'last' = 'last';
const baseBlockSize = 12;
const baseBlockMargin = 2;
const baseFontSize = 12;
const baseShowTotalCount = true;
const baseShowColorLegend = true;
const baseShowWeekdayLabels: DayName[] = ['mon', 'wed', 'fri'];

export default function GitHubCalendarWidget({
	username,
	errorMessage,
}: Props) {
	const [isDark, setIsDark] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const calendarProps = { year: baseYear };
	const [adaptiveBlockSize, setAdaptiveBlockSize] = useState(baseBlockSize);
	const [adaptiveBlockMargin, setAdaptiveBlockMargin] = useState(baseBlockMargin);
	const effectiveDays = 365;

	useEffect(() => {
		const syncTheme = () => {
			setIsDark(document.documentElement.classList.contains('dark'));
		};

		syncTheme();
		const observer = new MutationObserver(syncTheme);
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const updateBlockMetrics = () => {
			const width = containerRef.current?.clientWidth;
			if (!width) {
				return;
			}
			const weekColumns = Math.max(1, Math.ceil(effectiveDays / 7));
			const targetMargin = baseBlockMargin;
			const reserved = 24;
			const available = Math.max(140, width - reserved - targetMargin * (weekColumns - 1));
			const calculated = Math.floor(available / weekColumns);
			const targetSize = Math.max(6, Math.min(baseBlockSize, calculated));
			setAdaptiveBlockMargin(targetMargin);
			setAdaptiveBlockSize(targetSize);
		};

		updateBlockMetrics();
		const observer = new ResizeObserver(updateBlockMetrics);
		if (containerRef.current) {
			observer.observe(containerRef.current);
		}
		return () => observer.disconnect();
	}, [effectiveDays]);

	return (
		<div ref={containerRef} style={{ width: '100%', maxWidth: '100%', minWidth: 0 }}>
			<GitHubCalendar
				username={username}
				{...calendarProps}
				colorScheme={isDark ? 'dark' : 'light'}
				blockSize={adaptiveBlockSize}
				blockMargin={adaptiveBlockMargin}
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
	);
}
