import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const DateSelct = () => {
    const [submitDate, setSubmiteDate] = useState(new Date());
    return (
      <DatePicker selected={submitDate} onChange={(date) => setSubmiteDate(date)} />
    );
}

export default DateSelct;