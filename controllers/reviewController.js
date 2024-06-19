const Review = require('../model/Review')
const Product = require('../model/Product')
const User = require('../model/User')

const reviewController = {}


reviewController.createReview = async (req, res) => {
	try {
		const userId = req.userId
		const { productId, title, image, content, star } = req.body;

		// Validation
		if (!title || !content || star == null) {
			return res.status(400).json({ status: 'fail', message: 'Title, content, and star rating are required.' });
		}

		const review = new Review({
			userId, productId, title, image, content, star
		})
		await review.save()

		// user에게도 해당 리뷰id를, 리뷰ids 목록에 추가
		const user = await User.findById(userId)
		if (!user) {
			return res.status(404).json({ status: 'fail', message: 'User not found.' });
		}
		user.reviewIds.push(review._id)
		await user.save()

		return res.status(200).json({ status: 'success', message: '리뷰가 잘 작성되었습니다.' })
	} catch (e) {
		console.error(e);
		return res.status(400).json({ status: 'fail', error: e.message })
	}
}


reviewController.getAllReviewList = async (req, res) => {
	try {

		return res.status(200).json({ status: 'success', message: '' })
	} catch (e) {
		console.error(e);
		return res.status(400).json({ status: 'fail', error: e.message })
	}
}
reviewController.getMyReviewList = async (req, res) => {
	try {

		return res.status(200).json({ status: 'success', message: '' })
	} catch (e) {
		console.error(e);
		return res.status(400).json({ status: 'fail', error: e.message })
	}
}
reviewController.getItemReviewList = async (req, res) => {
	try {

		return res.status(200).json({ status: 'success', message: '' })
	} catch (e) {
		console.error(e);
		return res.status(400).json({ status: 'fail', error: e.message })
	}
}
reviewController.updateReview = async (req, res) => {
	try {

		return res.status(200).json({ status: 'success', message: '' })
	} catch (e) {
		console.error(e);
		return res.status(400).json({ status: 'fail', error: e.message })
	}
}
reviewController.deleteReview = async (req, res) => {
	try {

		return res.status(200).json({ status: 'success', message: '' })
	} catch (e) {
		console.error(e);
		return res.status(400).json({ status: 'fail', error: e.message })
	}
}



module.exports = reviewController;
