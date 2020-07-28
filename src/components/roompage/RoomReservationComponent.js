import React from 'react';
// import DayPicker from 'react-day-picker'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css'

function RoomReservationComponent(props) {
    const {
        isShowCheckoutDatePicker,
        isShowCheckinDatePicker,
        onShowReserveDialog,
        onShowCheckinDatePicker,
        onShowCheckoutDatePicker,
        onhandleCheckinDayClick,
        onhandleCheckoutDayClick,
        onChangeName,
        name,
        onChangePhone,
        phone
    } = props

    const dateFocus = (e, type) => {
        if (type === 'in') {
            onShowCheckinDatePicker()
        } else {
            onShowCheckoutDatePicker()
        }

    }

    return <div className="roompage_info_right_middle_down_half">
        <input type="text" placeholder="Name" value={name} onChange={onChangeName}/>
        <input type="text" placeholder="Phone" value={phone}  onChange={onChangePhone}/>
        <div className="roompage_info_right_middle_formDate">
            <div className={`roompage_info_right_middle_formDate_formDateLeftBox}`} style={{marginRight: '10px'}}>
                    <DayPickerInput onDayChange={onhandleCheckinDayClick}/>
                {/* <input className="roompage_info_right_middle_formDate_checkinInput"
                    type="text"
                    readOnly
                    value={checkinDay || ""}
                    onFocus={(e) => dateFocus(e, 'in')}
                    placeholder={"Check in"}
                />
                <DayPicker
                    onDayClick={onhandleCheckinDayClick}
                    selectedDays={checkinDay}
                /> */}
            </div>
            <div className={`roompage_info_right_middle_formDate_formDateRightBox'}`}>
                    <DayPickerInput onDayChange={onhandleCheckoutDayClick}/>
                {/* <input className="roompage_info_right_middle_formDate_checkoutInput"
                    type="text"
                    readOnly
                    value={checkoutDay || ""}
                    onFocus={(e) => dateFocus(e, 'out')}
                    placeholder={"Check out"}
                /> */}
                {/* <DayPicker
                    onDayClick={onhandleCheckoutDayClick}
                    selectedDays={checkoutDay}
                /> */}
            </div>
        </div>

        <div className="roompage_info_right_middle_formButton">
            <div></div>
            <div>
                <button onClick={onShowReserveDialog}>預約</button>
            </div>
        </div>

    </div>
}

export default RoomReservationComponent;