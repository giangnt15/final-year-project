import React from 'react'
import { Rating, Header, Text as RNText } from 'react-native-elements';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import moment from 'moment';
import { DATE_TIME_VN_24H } from '../../../constants';
import RatingReplyItem from './RatingReplyItem';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        borderColor: '#ccc',
        borderTopWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    createdAt: {
        color: "#a1a1a1",
        fontSize: 13
    },
    reviewText: {
        marginTop: 12
    },
    repliesCtn: {
        borderColor: "#ccc",
        borderLeftWidth: 1,
        marginTop: 16
    }
})

function RatingItem(props) {

    const { review,hideReplies } = props;
    const { id, rating, reviewHeader, reviewText, createdAt, author,replies } = review;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Rating
                    readonly startingValue={rating}
                    ratingBackgroundColor="#ccc"
                    imageSize={14} ratingCount={5} />
                <Text style={styles.createdAt}>{moment(createdAt).format("DD MMM, YYYY")}</Text>
            </View>
            <View>
                <RNText h4 h4Style={{ fontSize: 18 }}>{reviewHeader}</RNText>
            </View>
            <View>
                <Text style={styles.createdAt}>{author.fullName ?? author.username}</Text>
            </View>
            {reviewText!==null&&reviewText!==undefined&&reviewText!==''&&<View>
                <Text style={styles.reviewText}>{reviewText}</Text>
            </View>}
            {!hideReplies&&<View style={styles.repliesCtn}>
                {replies.map(r=>(
                    <RatingReplyItem key={r.id} reply={r} />
                ))}
            </View>}
        </View>)

}

export default RatingItem;