import { useState, useEffect } from "react";
import Link from "./link";
import Spinner from "./spinner";

const Form = () => {
  const [notValid, setValidation] = useState(false);
  const [links, setLinks] = useState([]);
  const [url, setUrl] = useState("");
  const [id, setId] = useState(1);
  const [isRequest, setRequest] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const linksArr =
      JSON.parse(window.localStorage.getItem("shortenedLinks")) || [];
    setLinks(linksArr);
  }, []);

  const getShortened = async () => {
    await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          const linksArr = [...links];
          const shortened = data.result["full_short_link"];
          linksArr.push({ id, url, shortened });
          setLinks(linksArr);
          window.localStorage.setItem(
            "shortenedLinks",
            JSON.stringify(linksArr)
          );
          setId(id + 1);
        } else {
          const urlStatus = data["error_code"];
          switch (urlStatus) {
            case 5:
              setValidation(true);
              setStatus("Link has already been shortened");
              return;
            case 2:
            case 4:
            case 6:
            case 10:
              setValidation(true);
              setStatus("Please enter a valid link");
              return;
            default:
              break;
          }
        }
      })
      .catch(() => {
        setValidation(true);
        setStatus("Timed out. PLease try again later");
      })
      .then(() => {
        setRequest(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlRegex = /^[^ "]+$/;
    if (!urlRegex.test(url)) {
      setValidation(true);
      setStatus("Please add a valid link");
      return;
    }
    setValidation(false);
    setRequest(true);
    getShortened();
  };

  return (
    <div>
      <div className="form-holder ps pe">
        <form
          className={`url-form mx-0 bg-violet px-4 px-md-5 pt-4 pt-md-5 rounded-3 row gap-3 gap-lg-0 ${
            notValid ? "non-valid pb-4 pb-md-5 pb-lg-4" : "pb-4 pb-md-5"
          }`}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="col-12 col-lg-10 px-0 pe-lg-2">
            <input
              type="url"
              className="form-control py-2 py-md-3 ps-3"
              placeholder="Shorten a link here..."
              aria-label="url input"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setValidation(false);
              }}
              required
            />
            {notValid ? (
              <div className="feedback pt-2 red fst-italic">{status}</div>
            ) : (
              ""
            )}
          </div>
          <div className="col-12 col-lg-2 px-0 ps-lg-2 ">
            <button
              type="submit"
              className="btn btn-hover w-100 py-2 py-md-3 bg-cyan text-white"
            >
              Shorten It!
            </button>
          </div>
        </form>
      </div>
      {isRequest ? <Spinner /> : ""}
      {links.length > 0 ? (
        <ul className="list-unstyled ps pe pt-4 mb-0 bg-gray d-flex flex-column gap-3">
          {links.map((link) => (
            <Link key={link.id} url={link.url} shortenedLink={link.shortened} />
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Form;
