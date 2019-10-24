export default {
    getAll: () => fetch(
        "http://localhost:8080/booking/all",
        {mode: 'cors'}
    ),
    createBooking: (booking) => fetch(
        "http://localhost:8080/booking", {
            mode: 'cors',
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(booking)
        }),
}
