import React from 'react'
import './css/RelatedDeals.scss'


function RelatedDeals() {
  return (
    <div className='related'>
        <h1 className='heading1'>Related details you might like for</h1>
        <div className='deals'>
            <div className='card'>
                <img className='icon' src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="image2" />
                <div className='offers'>
                    <p>20% Off</p>
                    <p>Limited-time</p>
                </div>
                <div className='title'>
                    <p>WebBuilder 1</p>
                </div>
                <div className='desc'>
                    Computer  Modern clasic with wix support
                </div>
                <div className='price'>
                    <p className='sprice'>$39.96</p>
                    <p className='bprice'>$49.96</p>
                    <p className='discount'>(20% Off)</p>
                </div>
                <button className='btn'>View Deals</button>
            </div>
            <div className='card'>
                <img className='icon' src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="image2" />
                <div className='offers'>
                    <p>20% Off</p>
                    <p>Limited-time</p>
                </div>
                <div className='title'>
                    <p>WebBuilder 1</p>
                </div>
                <div className='desc'>
                    Computer  Modern clasic with wix support
                </div>
                <div className='price'>
                    <p className='sprice'>$39.96</p>
                    <p className='bprice'>$49.96</p>
                    <p className='discount'>(20% Off)</p>
                </div>
                <button className='btn'>View Deals</button>
            </div>
            <div className='card'>
                <img className='icon' src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="image2" />
                <div className='offers'>
                    <p>20% Off</p>
                    <p>Limited-time</p>
                </div>
                <div className='title'>
                    <p>WebBuilder 1</p>
                </div>
                <div className='desc'>
                    Computer  Modern clasic with wix support
                </div>
                <div className='price'>
                    <p className='sprice'>$39.96</p>
                    <p className='bprice'>$49.96</p>
                    <p className='discount'>(20% Off)</p>
                </div>
                <button className='btn'>View Deals</button>
            </div>
        </div>
        <div className='newsletter'>
            <div className='news'>
                <p>Sign up and get exclusive special deals</p>
            </div> 
            <div className='mail'>
                <input type="username" />
                <button className='sign'>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default RelatedDeals