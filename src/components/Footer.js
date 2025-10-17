import React from 'react';


 function Footer(){
return (
<footer className="mt-5 pt-5 border-top bg-white">
<div className="container text-muted small">
<div className="row">
<div className="col-md-6">© {new Date().getFullYear()} Apple Clone — for learning</div>
<div className="col-md-6 text-md-end">Some links • Privacy • Terms</div>
</div>
</div>
</footer>
);
}
export default Footer