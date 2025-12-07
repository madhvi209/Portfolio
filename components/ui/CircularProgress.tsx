"use client";

import React from "react";

interface CircularProgressProps {
    percentage?: number;
    size?: number;
    strokeWidth?: number;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
    percentage = 75,
    size = 120,
    strokeWidth = 8,
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <svg width={size} height={size} className="rotate-[-90deg]">
            {/* Background Circle */}
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#333"
                strokeWidth={strokeWidth}
                fill="none"
            />

            {/* Progress Circle */}
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="var(--brand-green, #22c55e)"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                className="transition-all duration-700"
            />

            {/* Percentage Text */}
            <text
                x="50%"
                y="50%"
                dy="0.3em"
                textAnchor="middle"
                className="text-white font-semibold text-lg rotate-[90deg]"
            >
                {percentage}%
            </text>
        </svg>
    );
};
