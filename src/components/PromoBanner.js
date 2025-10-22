import React from 'react';


 function PromoBanner({ text, small }) {
return (
<div className={`w-100 py-2 ${small ? 'bg-light' : 'bg-dark text-white'}`}>
<div className="container">
				<div className="d-flex justify-content-between align-items-center">
					<div>{text}</div>
					<div><button className={`btn btn-link text-${small ? 'dark' : 'light'}`}>Learn more →</button></div>
				</div>
</div>
</div>
);
}
export default PromoBanner