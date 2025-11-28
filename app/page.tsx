"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div id="top" />

      {/* HEADER */}
      <header className="transition">
        <div className="container d-flex justify-content-between mw-1100">
          <Link
            className="nav-brand"
            href="https://www.vuongnguyen.info"
            title="VuongNguyen"
          >
            VuongNguyen
          </Link>

          <div className="menu-right d-flex flex-row"></div>
        </div>
      </header>

      {/* MAIN */}
      <main>
        {/* HERO */}
        <div className="hero pt-2 pt-md-5 mt-3 mt-md-0 pb-5">
          <div className="container">
            <div className="mw-1000 m-auto hide-complete">
              <h1 className="text-center transition">
                TikTok <span>Video</span> Download
              </h1>

              <h2 className="lead text-center mb-4">
                Download TikTok videos without watermark online
              </h2>

              <div className="alert alert-danger transition" role="alert"></div>

              <div className="progress transition">
                <div className="progress-bar" role="progressbar"></div>
              </div>

              {/* DOWNLOAD FORM */}
              <form action="">
                <div className="input-group">
                  <input
                    aria-label="Search"
                    className="input transition"
                    id="url"
                    name="url"
                    placeholder="Paste a valid TikTok video link"
                    type="text"
                  />

                  <div className="is-paste" id="paste">
                    <i className="bx bx-clipboard"></i>
                  </div>

                  <button
                    className="btn-container button fw-bold mt-2"
                    type="submit"
                  >
                    Download
                  </button>
                </div>
              </form>
            </div>

            {/* Response Video */}
            <div className="mw-1000 m-auto response mt-3">
              <div className="video"></div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="container hide-complete">
          <div className="mw-1000 m-auto">
            <h3 className="h2 mt-4">
              Download TikTok videos with no watermark for FREE
            </h3>

            <p>
              <Link href="https://www.vuongnguyen.info" title="VuongNguyen">
                VuongNguyen
              </Link>{" "}
              is one of the best TikTok downloader tools online. You don’t need
              to install apps. Just paste the link and download instantly.
            </p>

            {/* STEPS */}
            <div className="steps">
              <h3 className="h2 mt-5">Steps to download TikTok videos</h3>

              <p className="mb-4">
                Follow the steps below to download any TikTok video without a
                watermark.
              </p>

              <ul className="p-0 list-unstyled">
                <li>
                  <span className="bullet">1</span>
                  Open the official TikTok app and copy the video link.
                </li>
                <li>
                  <span className="bullet">2</span>
                  Paste the link into the box and submit.
                </li>
                <li>
                  <span className="bullet">3</span>
                  Wait while our server processes the download link.
                </li>
                <li>
                  <span className="bullet">4</span>
                  Download the video in high-quality MP4 format.
                </li>
              </ul>
            </div>

            {/* FEATURES */}
            <h3 className="h2 mt-5">TikTok Download Features</h3>

            <p className="mb-4">
              Our tool provides powerful features for downloading TikTok
              content.
            </p>

            <div className="features-list row">
              {[
                ["Flexible", "Works on all devices: PC, Mac, iPhone, Android."],
                ["Unlimited", "Download videos without limits or slowdown."],
                ["Free", "Completely free to use — no payments ever."],
                ["No Software", "You don’t need apps or extensions."],
                [
                  "Secure",
                  "Your privacy is protected using secure encryption.",
                ],
                ["Fast", "Optimized servers deliver fast downloads."],
              ].map(([title, desc]) => (
                <div key={title} className="col-lg-6">
                  <div className="card">
                    <div className="card-icon">
                      <span className="bx bx-check"></span>
                    </div>
                    <div className="card-text">
                      <h4 className="h5 mb-3">{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h3 className="h2 mt-5">Frequently Asked Questions</h3>

            <p className="mb-4">
              Answers to the most common questions about our TikTok downloader.
            </p>

            {/* FAQ LIST */}
            <div className="faq-container transition">
              {[
                [
                  "What devices are compatible?",
                  "You can download videos on iPhone, Android, Windows, macOS, and Linux.",
                ],
                [
                  "Is the downloader free?",
                  "Yes, it is 100% free and unlimited.",
                ],
                ["Is it legal?", "Yes. Download videos only for personal use."],
                [
                  "Where are downloaded videos stored?",
                  "Check your browser downloads folder.",
                ],
                [
                  "Does the site keep video copies?",
                  "No. We do not store videos or track download history.",
                ],
                [
                  "Can I download without watermark?",
                  "Yes, that’s the main purpose of our tool.",
                ],
              ].map(([question, answer]) => (
                <div key={question} className="question">
                  <h4 className="h5 mb-0">{question}</h4>
                  <span className="bx bx-help-circle"></span>
                  <div className="mt-4">
                    <p>{answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="spacer p-4"></div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="spacer p-4"></div>

          <div className="branding mb-4">
            <Link className="nav-brand" href="https://www.vuongnguyen.info">
              VuongNguyen
            </Link>
          </div>

          <div className="nav-footer">
            <Link href="/">Download TikTok Video</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.vuongnguyen.info"
              title="Facebook"
            >
              <span className="bx bxl-facebook-square"></span>
            </a>

            <a
              href="https://twitter.com/share?text=VuongNguyen+-+TikTok+Downloader&url=https://www.vuongnguyen.info"
              title="Twitter"
            >
              <span className="bx bxl-twitter"></span>
            </a>

            <a href="https://vk.com/share.php?url=https://www.vuongnguyen.info">
              <span className="bx bxl-vk" />
            </a>

            <a href="https://wa.me/?text=https://www.vuongnguyen.info">
              <span className="bx bxl-whatsapp" />
            </a>
          </div>

          <p className="copyright mb-0">
            © 2019 - 2025{" "}
            <Link href="https://www.vuongnguyen.info" title="VuongNguyen">
              VuongNguyen
            </Link>{" "}
            . All rights reserved
          </p>
        </div>
      </footer>

      <a className="scroll-to-top rounded" href="#top">
        <i className="bx bx-chevron-up"></i>
      </a>
    </>
  );
}
