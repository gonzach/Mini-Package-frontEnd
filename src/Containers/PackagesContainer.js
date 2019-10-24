import { connect } from 'react-redux'
import TodoResource from '../api/TodoResource.js';


const mapStateToProps = state => ({
    BOOKING
});

const mapDispatchToProps =  dispatch => ({
    refreshTodos: todos => dispatch({
        type: 'REFRESH_TODOS',
        payload: todos
    }),

    createBooking: booking => {
        TodoResource.createBooking(booking)
            .then(res => res.json())
            .then(({packageNumber, receiver, phone, weight }) => {
                dispatch({
                    type: 'UPDATE_TODO',
                    payload: {id, status, content}
                })
            })
    }

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoWrapper)
