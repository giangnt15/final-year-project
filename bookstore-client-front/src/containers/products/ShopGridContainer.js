import { connect } from 'react-redux';
import ShopGrid from '../../components/shared/shop/ShopGrid';
import { withApollo } from '@apollo/react-hoc';
import { getBooks } from '../../redux/actions/bookActions';

const mapStateToProps = state => {
    return {
        books: state.books
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getBooks: ({ where, orderBy, skip, first,selection }) => {
        dispatch(getBooks(ownProps.client, { where, orderBy, skip, first, selection }));
    }
})

export default withApollo(connect(mapStateToProps,mapDispatchToProps)(ShopGrid));