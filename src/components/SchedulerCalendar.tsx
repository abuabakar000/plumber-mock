"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, Clock, Check } from "lucide-react";

interface SchedulerCalendarProps {
  primaryColor: string;
  onChange: (dateTime: string | null) => void;
}

const TIME_SLOTS = [
  "08:00 AM",
  "09:30 AM",
  "11:00 AM",
  "12:30 PM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM"
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAYS_OF_WEEK = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export default function SchedulerCalendar({ primaryColor, onChange }: SchedulerCalendarProps) {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Derive month and year
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get first day of month index (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const getFirstDayOfMonth = (y: number, m: number) => {
    const day = new Date(y, m, 1).getDay();
    // Map Sunday (0) to index 6, Monday (1) to index 0, etc.
    return day === 0 ? 6 : day - 1;
  };

  // Get total days in month
  const getDaysInMonth = (y: number, m: number) => {
    return new Date(y, m + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(year, month);
  const startDayOffset = getFirstDayOfMonth(year, month);

  // Month navigation
  const prevMonth = () => {
    // Prevent navigating to past months
    const prevDate = new Date(year, month - 1, 1);
    const minNavLimit = new Date(today.getFullYear(), today.getMonth(), 1);
    if (prevDate >= minNavLimit) {
      setCurrentDate(prevDate);
    }
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Check if a specific date in the calendar is in the past
  const isPastDay = (dayNum: number) => {
    const checkDate = new Date(year, month, dayNum);
    const comparisonDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return checkDate < comparisonDate;
  };

  // Check if selected
  const isSelected = (dayNum: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === dayNum &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };

  // Select Date
  const handleSelectDate = (dayNum: number) => {
    if (isPastDay(dayNum)) return;
    const dateObj = new Date(year, month, dayNum);
    setSelectedDate(dateObj);
    setSelectedTime(null); // Reset time selection on date change
  };

  // Handle slot click
  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
  };

  // Pass changes back to parent
  useEffect(() => {
    if (selectedDate && selectedTime) {
      const formattedDate = selectedDate.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric"
      });
      onChange(`${formattedDate} at ${selectedTime}`);
    } else {
      onChange(null);
    }
  }, [selectedDate, selectedTime, onChange]);

  // Generate calendar grid array
  const gridCells = [];
  // Add offset placeholder cells
  for (let i = 0; i < startDayOffset; i++) {
    gridCells.push(<div key={`empty-${i}`} className="aspect-square w-full" />);
  }
  // Add actual days
  for (let d = 1; d <= daysInMonth; d++) {
    const past = isPastDay(d);
    const active = isSelected(d);
    
    gridCells.push(
      <button
        key={`day-${d}`}
        type="button"
        disabled={past}
        onClick={() => handleSelectDate(d)}
        style={{
          backgroundColor: active ? primaryColor : "",
          boxShadow: active ? `0 0 15px ${primaryColor}80` : ""
        }}
        className={`aspect-square w-full rounded-lg flex items-center justify-center text-[12px] sm:text-[13px] font-medium transition-all outline-none border cursor-pointer
          ${past 
            ? "border-transparent text-zinc-700 cursor-not-allowed" 
            : active 
              ? "text-zinc-950 border-transparent scale-105" 
              : "border-zinc-800/40 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-900/50 hover:text-white"
          }
        `}
      >
        {d}
      </button>
    );
  }

  // Check if current month is the current system month to disable back navigation
  const isCurrentMonth = year === today.getFullYear() && month === today.getMonth();

  return (
  <div className="bg-[#0c0e12] border border-zinc-800/60 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col relative overflow-hidden shadow-2xl h-full justify-between">
      {/* Visual Accent Glow */}
      <div 
        style={{ backgroundColor: primaryColor }}
        className="absolute -top-24 -left-24 w-80 h-80 opacity-[0.06] rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Widget Header */}
        <div className="flex items-center gap-3 mb-6">
          <div 
            style={{ borderColor: `${primaryColor}30`, backgroundColor: `${primaryColor}10` }}
            className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0"
          >
            <Calendar style={{ color: primaryColor }} className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-white text-lg font-light tracking-tight">Book a Time <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest ml-1">(Optional)</span></h3>
            <p className="text-zinc-500 text-xs font-light">Select your preferred date & time slot</p>
          </div>
        </div>

        {/* Date Selector Workspace */}
        <div className="flex flex-col gap-6">
          {/* Month Navigator */}
          <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-white uppercase">
              {MONTHS[month]} {year}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevMonth}
                disabled={isCurrentMonth}
                className={`w-8 h-8 rounded-lg border border-zinc-800 flex items-center justify-center hover:border-zinc-600 transition-colors ${isCurrentMonth ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}
              >
                <ChevronLeft className="w-4 h-4 text-zinc-400" />
              </button>
              <button
                type="button"
                onClick={nextMonth}
                className="w-8 h-8 rounded-lg border border-zinc-800 flex items-center justify-center hover:border-zinc-600 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 text-zinc-400" />
              </button>
            </div>
          </div>

          {/* Calendar Grid Container */}
          <div>
            {/* Days of week */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2 text-center">
              {DAYS_OF_WEEK.map((day) => (
                <span key={day} className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                  {day}
                </span>
              ))}
            </div>
            {/* Grid Days */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {gridCells}
            </div>
          </div>
        </div>

        {/* Time Selector Workspace */}
        <div className="mt-8 border-t border-zinc-900/60 pt-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock style={{ color: primaryColor }} className="w-4 h-4" />
            <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400">Available Slots</span>
          </div>

          {selectedDate ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
              {TIME_SLOTS.map((time) => {
                const isActive = selectedTime === time;
                return (
                  <button
                    key={time}
                    type="button"
                    onClick={() => handleSelectTime(time)}
                    style={{
                      borderColor: isActive ? primaryColor : "",
                      boxShadow: isActive ? `0 0 10px ${primaryColor}20` : ""
                    }}
                    className={`px-3 py-2.5 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer hover:border-zinc-600 hover:text-white
                      ${isActive
                        ? "text-white bg-zinc-900 border-transparent"
                        : "border-zinc-850 bg-zinc-950/40 text-zinc-400"
                      }
                    `}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="border border-dashed border-zinc-800/40 rounded-xl p-6 flex flex-col items-center justify-center text-center">
              <span className="text-xs text-zinc-600 font-light max-w-[200px]">
                Please select a calendar date above to reveal available time slots.
              </span>
            </div>
          )}
        </div>

        {/* Final Selection Summary */}
        {selectedDate && selectedTime && (
          <div 
            style={{ 
              borderColor: `${primaryColor}40`, 
              backgroundColor: `${primaryColor}05`
            }} 
            className="mt-6 border rounded-xl p-3 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 animate-in zoom-in-95 duration-200"
          >
            <div className="flex items-center gap-2.5">
              <div 
                style={{ backgroundColor: primaryColor }} 
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              >
                <Check className="w-3 h-3 text-zinc-950 stroke-[3px]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Selected Appointment</span>
                <span className="text-xs font-medium text-white truncate max-w-[180px] sm:max-w-none">
                  {selectedDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })} at {selectedTime}
                </span>
              </div>
            </div>
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded-full shrink-0">
              Ready
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
