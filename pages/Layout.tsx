import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import { useState, useContext } from "react";
import { OrderContext } from "../Store/order-context";
import { useRouter } from "next/router";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const [showMenuResp, setShowMenuResp] = useState<boolean>(false);
  const ctx = useContext(OrderContext);

  const year = new Date().getFullYear();

  const router = useRouter();

  return (
    <>
      <div className={`menu-resp ${showMenuResp && "active"}`}>
        <div
          className="btn-close-menu"
          onClick={() => setShowMenuResp(false)}
        ></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <nav>
                <ul className="m-0 ps-0">
                  <li className="d-lg-none">
                    <Link href="/" legacyBehavior>
                      <a
                        className={`d-flex align-items-center ${
                          router.asPath !== "/" && "text-black"
                        }`}
                        onClick={() => {
                          setShowMenuResp(false);
                          ctx.stepsHandler("1");
                        }}
                      >
                        <i className="fa-solid fa-cart-shopping me-3"></i>Order
                        now
                      </a>
                    </Link>
                  </li>
                  <li className="d-lg-none">
                    <Link href="/subscription" legacyBehavior>
                      <a
                        className={`d-flex align-items-center ${
                          router.asPath !== "/subscription" && "text-black"
                        }`}
                        onClick={() => setShowMenuResp(false)}
                      >
                        <i className="fa-sharp fa-solid fa-dollar-sign me-3"></i>{" "}
                        Subscribe
                      </a>
                    </Link>
                  </li>
                  <li className="d-lg-none">
                    <Link href="/my-orders" legacyBehavior>
                      <a
                        className={`d-flex align-items-center ${
                          router.asPath !== "/my-orders" && "text-black"
                        }`}
                        onClick={() => setShowMenuResp(false)}
                      >
                        <i className="fa-sharp fa-solid fa-truck-fast me-3"></i>{" "}
                        My Orders
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="container">
          <div className="row">
            <div className="d-none col-lg-3 d-lg-flex justify-content-between align-items-center">
              <Link href="/" legacyBehavior>
                <a className="logo-header position-relative w-100">
                  <Image
                    src="/assets/logo.svg"
                    fill={true}
                    alt="SmartShopper Logo"
                  />
                </a>
              </Link>
            </div>
            <div className="col-12 col-lg-9 d-flex justify-content-lg-end">
              <nav className="nav-menu w-100">
                <ul className="d-flex w-100 justify-content-between justify-content-lg-end">
                  <li className="d-none d-lg-inline-block">
                    <Link href="/" legacyBehavior>
                      <a
                        className={`${router.asPath !== "/" && "text-black"}`}
                        onClick={() => {
                          ctx.stepsHandler("1");
                        }}
                      >
                        Order now
                      </a>
                    </Link>
                  </li>
                  <li className="d-none d-lg-inline-block">
                    <Link href="/subscription" legacyBehavior>
                      <a
                        className={`${
                          router.asPath !== "/subscription" && "text-black"
                        }`}
                      >
                        Subscribe
                      </a>
                    </Link>
                  </li>
                  <li className="d-none d-lg-inline-block">
                    <Link href="/my-orders" legacyBehavior>
                      <a
                        className={`${
                          router.asPath !== "/my-orders" && "text-black"
                        }`}
                      >
                        My Orders
                      </a>
                    </Link>
                  </li>
                  <li className="d-inline-block d-lg-none">
                    <Link href="/" legacyBehavior>
                      <a className="d-block position-relative w-100 h-100">
                        <Image
                          src="/assets/logo-mobile.svg"
                          width={50}
                          height={50}
                          alt="SmartShopper Logo Mobile"
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <ConnectButton
                      chainStatus={{ smallScreen: "none", largeScreen: "full" }}
                      showBalance={{ smallScreen: false, largeScreen: false }}
                    />
                  </li>
                  <li className="ms-3 d-lg-none">
                    <button
                      className="btn p-0 open-menu d-lg-none"
                      onClick={() => setShowMenuResp(true)}
                    >
                      <Image
                        src="/assets/menu.png"
                        alt="SmartShopper Menu Icon"
                        width={40}
                        height={40}
                      />
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <main>{props.children}</main>
      <footer>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3">
              <Link href="/" legacyBehavior>
                <a className="logo-footer d-block position-relative w-100">
                  <Image
                    src="/assets/logo-black.svg"
                    fill={true}
                    alt="SmartShopper Logo Black"
                  />
                </a>
              </Link>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center my-4 my-md-0">
              <p className="mb-0">
                © SmartShopper {year} - All rights Reserved
              </p>
            </div>
            <div className="col-lg-3 d-flex align-items-center justify-content-center justify-content-lg-end text-black">
              <ul className="smartshopper-social list-unstyled text-black d-flex mb-0">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
