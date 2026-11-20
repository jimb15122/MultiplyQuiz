function getSpeedRating(avgSeconds) {
  if (avgSeconds < 3.5) return { emoji: "🦅", text: "Eagle - Extreme Speed" };
  if (avgSeconds < 4.5) return { emoji: "🐆", text: "Cheetah - Very Fast" };
  if (avgSeconds < 5.5) return { emoji: "🐎", text: "Horse - Fast" };
  if (avgSeconds < 7) return { emoji: "🐕‍🦺", text: "Dog - Average" };
  if (avgSeconds < 8) return { emoji: "🦔", text: "Hedgehog - Below Average" };
  if (avgSeconds < 9) return { emoji: "🐢", text: "Turtle - Slow" };
  if (avgSeconds < 10) return { emoji: "🦥", text: "Sloth - Very Slow" };
  return { emoji: "🐌", text: "Snail - Extremely Slow" };
}

function getAccuracyRating(percentage) {
  if (percentage === 100) return { emoji: "💯", text: "Perfect" };
  if (percentage >= 96) return { emoji: "🎯", text: "Near Perfect" };
  if (percentage >= 88) return { emoji: "😃", text: "Very Good" };
  if (percentage >= 76) return { emoji: "🤓", text: "Good" };
  if (percentage >= 64) return { emoji: "🙂", text: "Fair" };
  if (percentage >= 48) return { emoji: "😕", text: "Poor" };
  return { emoji: "😒", text: "Very Poor" };
}
