import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

import { theme } from "../styles/theme";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

interface ChartProps {
    type: "area" | "bar";
    size: number;
    labels: Array<number | string>;
}

export function ChartComponent({ type, size, labels }: ChartProps) {
    const options: ApexOptions = {
        chart: {
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            foreColor: theme.colors.gray[500],
        },
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            enabled: false,
        },
        xaxis: {
            categories: labels,
            axisBorder: {
                color: theme.colors.gray[500]
            },
            axisTicks: {
                color: theme.colors.gray[600],
            },
        },
        fill: {
            opacity: 0.3,
            type: 'gradient',
            gradient: {
                shade: 'dark',
                opacityFrom: 0.7,
                opacityTo: 0.3
            },
        }
    }

    const series = [
        { name: 'series1', data: [0, 3, 5, 2, 2, 3, 5] }
    ]


    return (
        <Chart 
            options={options} 
            series={series} 
            type={type} 
            width={size} 
        />
    );
}