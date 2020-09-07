import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="text-center my-3 ">
                    <h1>Contact</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-8 mx-auto">
                    <form className="gy-3">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                 </div>
                                  <div class="form-group">
                                    <label for="exampleInputPassword1">Mobile Number</label>
                                    <input type="number" class="form-control"  placeholder="Mobile Number" />
                                   </div>
                                   <div class="form-group">
                                    <label for="exampleInputPassword1">Message</label>
                                    <textarea class="form-control" aria-label="With textarea"></textarea>
                                   </div>
                                   
                                        <button type="submit" class="btn btn-primary my-2">Submit</button>
                                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contact;