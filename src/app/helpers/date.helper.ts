export class DateHelper {
  public static timeDifference(initialDate: Date, finalDate: Date) {
    return Math.abs(new Date(initialDate).getTime() - new Date(finalDate).getTime());
  }

  public static daysDifference(initialDate: Date, finalDate: Date) {
    return Math.ceil(this.timeDifference(initialDate, finalDate) / (1000 * 60 * 60 * 24));
  }
}
