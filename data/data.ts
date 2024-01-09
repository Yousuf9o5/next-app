export const daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Friday", "Sat"];

export const days = Array.from({ length: 31 }).map((_, i) => {
  return {
    name: daysName[i % 7],
    num: i + 1,
  };
});

export const date = Array.from({ length: 24 }).map((_, i) =>
  i + 1 <= 12 ? (i % 12 || 12) + ":00 AM" : (i % 12 || 12) + ":00 PM"
);
