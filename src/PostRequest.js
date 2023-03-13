import { useRef } from "react";
import axios from "axios";

const url = "https://course-api.com/axios-tutorial-post";
function PostRequest() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(nameRef.current.value, emailRef.current.value);
    try {
      const resp = await axios.post(url, {
        name: nameRef.current.value,
        email: emailRef.current.value,
      });
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section>
      <h2 className="text-center">post request</h2>
      <form className="form">
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input ref={nameRef} id="name" type="text" className="form-input" />
        </div>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            email
          </label>
          <input ref={emailRef} id="email" type="text" className="form-input" />
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-block">
          register
        </button>
      </form>
    </section>
  );
}

export default PostRequest;
