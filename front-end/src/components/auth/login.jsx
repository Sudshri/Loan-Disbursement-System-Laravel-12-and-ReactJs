
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('wrapcode.info@gmail.com');
  const [password, setPassword] = useState('123456');
  const [rememberMe, setRememberMe] = useState(false);
 const Navigate = useNavigate();
  const loginFormSubmit = (e) => {
    e.preventDefault();
    Navigate('/admin/dashboard');
   
  }
  return (
     <main className="auth-minimal-wrapper">
        <div className="auth-minimal-inner">
            <div className="minimal-card-wrapper">
                <div className="card mb-4 mt-5 mx-4 mx-sm-0 position-relative">
                    <div className="wd-50 bg-white p-2 rounded-circle shadow-lg position-absolute translate-middle top-0 start-50">
                        <img src="assets/images/logo-abbr.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="card-body p-sm-5">
                        <h2 className="fs-20 fw-bolder mb-4">Login</h2>
                        <h4 className="fs-13 fw-bold mb-2">Login to your account</h4>
                        <p className="fs-12 fw-medium text-muted">Thank you for get back <strong>Nelel</strong> web applications, let's access our the best recommendation for you.</p>
                        <form className="w-100 mt-4 pt-2" onSubmit={loginFormSubmit}>
                            <div className="mb-4">
                                <input type="email" className="form-control" placeholder="Email or Username" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}/>
                                        <label className="custom-control-label c-pointer" htmlFor="rememberMe">Remember Me</label>
                                    </div>
                                </div>
                                <div>
                                    <a href="auth-reset-minimal.html" className="fs-11 text-primary">Forget password?</a>
                                </div>
                            </div>
                            <div className="mt-5">
                                <button type="submit" className="btn btn-lg btn-primary w-100">Login</button>
                            </div>
                        </form>
                        <div className="w-100 mt-5 text-center mx-auto">
                            <div className="mb-4 border-bottom position-relative"><span className="small py-1 px-3 text-uppercase text-muted bg-white position-absolute translate-middle">or</span></div>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <a href="javascript:void(0);" className="btn btn-light-brand flex-fill" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Login with Facebook">
                                    <i className="feather-facebook"></i>
                                </a>
                                <a href="javascript:void(0);" className="btn btn-light-brand flex-fill" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Login with Twitter">
                                    <i className="feather-twitter"></i>
                                </a>
                                <a href="javascript:void(0);" className="btn btn-light-brand flex-fill" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Login with Github">
                                    <i className="feather-github text"></i>
                                </a>
                            </div>
                        </div>
                        <div className="mt-5 text-muted">
                            <span> Don't have an account?</span>
                            <a href="auth-register-minimal.html" className="fw-bold">Create an Account</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Login