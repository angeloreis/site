const colorProgress = {
    full: "green",
    mid: "blue",
    beginner: "teal",
    newbie: "red"
  }

  export const getColorStack = (percentage: number) => {
    if (percentage >= 0 && percentage <= 40) {
      return colorProgress.newbie
    }

    if (percentage >= 41 && percentage <= 70) {
      return colorProgress.beginner
    }

    if (percentage >= 71 && percentage <= 80) {
      return colorProgress.mid
    }
    
    return colorProgress.full
  }