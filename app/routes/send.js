import { Resend } from 'resend'
import {json, redirect} from '@remix-run/node';

const resend = new Resend(process.env.RESEND_KEY)

async function requirePostWithFormData(req, res, next) {
	if (req.method.toUpperCase() !== 'POST') {
		return redirect('/')
	}

	// Check if form data is present
	const formData = await req.formData();
	if (!formData) {
		return redirect('/')
	}

	next()
}

export function loader({ request }) {
	return requirePostWithFormData(request);
}

export const action = async ({ request }) => {
	if (!request) {
		return
	}
	const fd = await request.formData()

	if (!fd.get('name') || !fd.get('email') || !fd.get('phone')) {
		return
	}

	try {
		const data = await resend.emails.send({
			from: 'noreply@noreply.angelgreens.co',
			to: 'angelgreensco@gmail.com',
			subject: 'NEW: AGCO ORDER SUBMISSION RECEIVED',
			html: `
			<div style="font-weight: normal">
				<h2>Order Submission Received</h2>
				<p><span style="text-decoration-line: underline">Contact Name:</span> ${fd.get('name')}</p>
				<p><span style="text-decoration-line: underline">Contact Email:</span> ${fd.get('email')}</p>
				<p><span style="text-decoration-line: underline">Contact Phone Number:</span> ${fd.get('phone')}</p>
				
				<p>Potential custmer was sent an automated message.</p>

				<small style="margin-top: 20px">Powered by <a href="https://www.withnubo.com/" style="font-weight: bold">Nubo</a>.</small>
			</div>
			`,
		})
	} catch (error) {
		return
	}

	try {
		console.log(fd.get('email'))
		const data = await resend.emails.send({
			from: 'noreply@noreply.angelgreens.co',
			to: fd.get('email'),
			subject: 'AGCO ORDER INQUIRY RECEIVED',
			html: `
			<div style="font-weight: normal">
				<h2>Order Inquiry Received</h2>
				<p>${fd.get('name')},</p>
				<p>This is an automated message. Thanks for reaching out. A member of our team will reach out to get your order started.</p>
				<small style="margin-top: 20px">Powered by <a href="https://www.withnubo.com/" style="font-weight: bold">Nubo</a>.</small>
			</div>
			`,
		})
		return
	} catch (error) {
		return
	}

};

export default action