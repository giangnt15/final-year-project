import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Rating } from 'react-native-elements';
import { Bar } from 'react-native-progress';
import { calculateReviewScore, roundHalf } from '../../../utils/common';

const styles = StyleSheet.create({
    starPercentageRow: {
        marginVertical: 4,
        display: "flex",
        width: 60,
        flexDirection: 'row',
        alignItems: 'center',
    },
    percentageText: {
        fontSize: 12
    }
})

function RatingSummary(props) {

    const { bookReviews, gettingBookReviews } = props;

    const avgRating = calculateReviewScore(bookReviews.getBookReviewsByBook);
    const { fiveStar, fourStar, threeStar, twoStar, oneStar, totalCount } = bookReviews.getBookReviewsByBook;
    let fourStarPercent = 0;
    let threeStarPercent = 0;
    let twoStarPercent = 0;
    let fiveStarPercent = 0;
    let oneStarPercent = 0;
    if (totalCount > 0) {
        fourStarPercent = roundHalf(fourStar / totalCount * 100);
        threeStarPercent = roundHalf(threeStar / totalCount * 100);
        twoStarPercent = roundHalf(twoStar / totalCount * 100);
        fiveStarPercent = roundHalf(fiveStar / totalCount * 100);
        oneStarPercent = roundHalf(oneStar / totalCount * 100);
    }
    return (
        <View style={{ display: "flex", flexDirection: 'row' }}>
            <View style={{
                display: "flex", alignItems: 'center',
                justifyContent: 'center', borderRightColor: '#ccc',
                borderRightWidth: 1, paddingHorizontal: 24
            }}>
                {gettingBookReviews ? <ActivityIndicator /> : <>
                    <Text style={{ fontSize: 36, fontWeight: '700' }}>{isNaN(avgRating) && !avgRating ? 0 : avgRating.toFixed(1)}</Text>
                    <Rating
                        readonly startingValue={isNaN(avgRating) && !avgRating ? 0 : avgRating}
                        ratingBackgroundColor="#ccc"
                        imageSize={13} ratingCount={5} />
                    <Text style={{ color: '#a1a1a1' }}>{Intl.NumberFormat().format(bookReviews.getBookReviewsByBook.totalCount)} đánh giá</Text>
                </>}
            </View>
            <View style={{
                display: "flex",
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 8,
            }}>
                <View style={styles.starPercentageRow}>
                    <Rating
                        readonly startingValue={5}
                        ratingBackgroundColor="#ccc"
                        imageSize={12} ratingCount={5} />
                    <Bar progress={isNaN(fiveStarPercent) ? 0 : fiveStarPercent} animated={false} color="#16687a" style={{ height: 7, marginRight: 8, marginLeft: 8 }} />
                    <Text style={styles.percentageText}>{fiveStarPercent}%</Text>
                </View>
                <View style={styles.starPercentageRow}>
                    <Rating
                        readonly startingValue={4}
                        ratingBackgroundColor="#ccc"
                        imageSize={12} ratingCount={5} />
                    <Bar progress={isNaN(fourStarPercent) ? 0 : fourStarPercent} animated={false} color="#16687a" style={{ height: 7, marginRight: 8, marginLeft: 8 }} />
                    <Text style={styles.percentageText}>{fourStarPercent}%</Text>
                </View>
                <View style={styles.starPercentageRow}>
                    <Rating
                        readonly startingValue={3}
                        ratingBackgroundColor="#ccc"
                        imageSize={12} ratingCount={5} />
                    <Bar progress={isNaN(threeStarPercent) ? 0 : threeStarPercent} animated={false} color="#16687a" style={{ height: 7, marginRight: 8, marginLeft: 8 }} />
                    <Text style={styles.percentageText}>{threeStarPercent}%</Text>
                </View>
                <View style={styles.starPercentageRow}>
                    <Rating
                        readonly startingValue={2}
                        ratingBackgroundColor="#ccc"
                        imageSize={12} ratingCount={5} />
                    <Bar progress={isNaN(twoStarPercent) ? 0 : twoStarPercent} animated={false} color="#16687a" style={{ height: 7, marginRight: 8, marginLeft: 8 }} />
                    <Text style={styles.percentageText}>{twoStarPercent}%</Text>
                </View>
                <View style={styles.starPercentageRow}>
                    <Rating
                        readonly startingValue={1}
                        ratingBackgroundColor="#ccc"
                        imageSize={12} ratingCount={5} />
                    <Bar progress={isNaN(oneStarPercent) ? 0 : oneStarPercent} animated={false} color="#16687a" style={{ height: 7, marginRight: 8, marginLeft: 8 }} />
                    <Text style={styles.percentageText}>{oneStarPercent}%</Text>
                </View>
            </View>
        </View>
    )

}

export default RatingSummary;