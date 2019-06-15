import React from 'react';
export default class Footer extends React.Component
{
    constructor(props)
    {
      super(props);
    }
    render()
    {
        return(
        <div>
<section id="footer">
<div className ="container">
<div className ="row text-center text-xs-center text-sm-left text-md-left">
<div className ="col-xs-12 col-sm-4 col-md-4">
<h5>Quick links</h5>
<ul className ="list-unstyled quick-links">
<li><a href="javascript:void();"><i className ="fa fa-angle-double-right"></i>Home</a></li>
</ul>
</div>
<div className ="col-xs-12 col-sm-4 col-md-4">
<h5>Quick links</h5>
<ul className ="list-unstyled quick-links">
<li><a href="javascript:void();"><i className ="fa fa-angle-double-right"></i>Home</a></li>
</ul>
</div>
<div className ="col-xs-12 col-sm-4 col-md-4">
<h5>Quick links</h5>
<ul className ="list-unstyled quick-links">
<li><a href="javascript:void();"><i className ="fa fa-angle-double-right"></i>Home</a></li>
</ul>
</div>
</div>
<div className ="row">
<div className ="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
<ul className ="list-unstyled list-inline social text-center">
<li className ="list-inline-item"><a href="http://www.facebook.com"><i className ="fa fa-facebook"></i></a></li>
<li className ="list-inline-item"><a href="http://www.instagram.com"><i className ="fa fa-instagram"></i></a></li>
<li className ="list-inline-item"><a href="http://www.twitter.com"><i className ="fa fa-twitter"></i></a></li>
</ul>
</div>
</div>	
<div className ="row">
<div className ="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
<p><a href="https://www.nationaltransaction.com/">Todos los derechos reservados</a></p>
</div>
</div>	
</div>
</section>
        </div>)
    }
}

