import { useRef } from "react";
import Button from "../ui/button"
import styles from './events-search.module.css'


function EventsSearch({ onSearch }) {
    // refs
    const yearInputRef = useRef();
    const monthInputRef = useRef();
    // handler
    function submitHandler(event) {
        event.preventDefault();
        const selectedYear = yearInputRef.current.value;
        const selectedMonth = monthInputRef.current.value;

        onSearch(selectedYear, selectedMonth);
    }
    // ui
    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label htmlFor="year">Year</label>
                    <select ref={yearInputRef} id="year">
                        <option value='2021'>2021</option>
                        <option value='2022'>2022</option>
                    </select>
                </div>
                <div className={styles.control}>
                    <label htmlFor="month">month</label>
                    <select ref={monthInputRef} id="month">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    )
}

export default EventsSearch
