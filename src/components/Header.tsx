import {
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeader,
  EuiImage,
  EuiText,
  EuiTextColor,
} from "@elastic/eui";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { changeTheme, logout as logoutAction } from "../app/slices/AuthSlice";
import {
  getCreateMeetingBreadCrumbs,
  getDashboardBreadCrumbs,
  getMeetingsBreadCrumbs,
  getMyMeetingsBreadCrumbs,
  getOneOnOneMeetingBreadCrumbs,
  getVideoConferenceBreadCrumbs,
} from "../utils/breadcrumbs";
import { BreadCrumbsType } from "../utils/types";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const userName = useAppSelector((zoomApp) => zoomApp.auth.userInfo?.name);
  const isDarkTheme = useAppSelector((zoomApp) => zoomApp.auth.isDarkTheme);
  const [breadCrumbs, setBreadCrumbs] = useState<Array<BreadCrumbsType>>([
    {
      text: "Dashboard",
    },
  ]);
  const dispatch = useDispatch();
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const { pathname } = location;
    if (pathname === "/") setBreadCrumbs(getDashboardBreadCrumbs(navigate));
    else if (pathname === "/create")
      setBreadCrumbs(getCreateMeetingBreadCrumbs(navigate));
    else if (pathname === "/create1on1")
      setBreadCrumbs(getOneOnOneMeetingBreadCrumbs(navigate));
    else if (pathname === "/videoconference")
      setBreadCrumbs(getVideoConferenceBreadCrumbs(navigate));
    else if (pathname === "/mymeetings")
      setBreadCrumbs(getMyMeetingsBreadCrumbs(navigate));
    else if (pathname === "/meetings") {
      setBreadCrumbs(getMeetingsBreadCrumbs(navigate));
    }
  }, [location, navigate]);

  const logout = () => {
    localStorage.removeItem("meetup-user");
    dispatch(logoutAction());
    navigate("/login");
  };

  const invertTheme = () => {
    const theme = localStorage.getItem("zoom-theme");
    localStorage.setItem("zoom-theme", theme === "light" ? "dark" : "light");
    dispatch(changeTheme({ isDarkTheme: !isDarkTheme }));
  };

  const section = [
    {
      items: [
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = isDarkTheme ? 'rgba(77, 166, 255, 0.15)' : 'rgba(11, 92, 255, 0.1)';
              e.currentTarget.style.boxShadow = isDarkTheme ? '0 0 25px rgba(77, 166, 255, 0.4)' : '0 0 20px rgba(11, 92, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <EuiFlexGroup alignItems="center" gutterSize="s">
              <EuiFlexItem grow={false}>
                <EuiImage src={logo} alt="Meetup Logo" size="60px" />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiText>
                  <h2 style={{ padding: "0 1vw", margin: 0 }}>
                    <EuiTextColor color={isDarkTheme ? "#66d9ff" : "#0b5cff"}>Meetup-lite</EuiTextColor>
                  </h2>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </div>
        </Link>,
      ],
    },
    {
      items: [
        <>
          {userName ? (
            <EuiText>
              <h3>
                <EuiTextColor color="white">Hello, </EuiTextColor>
                <EuiTextColor color="#0b5cff">{userName}</EuiTextColor>
              </h3>
            </EuiText>
          ) : null}
        </>,
      ],
    },
    {
      items: [
        <EuiFlexGroup
          justifyContent="center"
          alignItems="center"
          direction="row"
          style={{ gap: "2vw" }}
        >
          <EuiFlexItem grow={false} style={{ flexBasis: "fit-content" }}>
            {isDarkTheme ? (
              <EuiButtonIcon
                onClick={invertTheme}
                iconType="sun"
                display="fill"
                size="s"
                color="warning"
                aria-label="theme-button-light"
              />
            ) : (
              <EuiButtonIcon
                onClick={invertTheme}
                iconType="moon"
                display="fill"
                size="s"
                color="ghost"
                aria-label="theme-button-dark"
              />
            )}
          </EuiFlexItem>
          <EuiFlexItem grow={false} style={{ flexBasis: "fit-content" }}>
            <EuiButtonIcon
              onClick={logout}
              iconType="lock"
              display="fill"
              size="s"
              aria-label="logout-button"
            />
          </EuiFlexItem>
        </EuiFlexGroup>,
      ],
    },
  ];

  const responsiveSection = [
    {
      items: [
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = isDarkTheme ? 'rgba(77, 166, 255, 0.15)' : 'rgba(11, 92, 255, 0.1)';
              e.currentTarget.style.boxShadow = isDarkTheme ? '0 0 25px rgba(77, 166, 255, 0.4)' : '0 0 20px rgba(11, 92, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <EuiFlexGroup alignItems="center" gutterSize="s">
              <EuiFlexItem grow={false}>
                <EuiImage src={logo} alt="Meetup Logo" size="50px" />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiText>
                  <h2 style={{ padding: "0 1vw", margin: 0 }}>
                    <EuiTextColor color={isDarkTheme ? "#66d9ff" : "#0b5cff"}>Meetup</EuiTextColor>
                  </h2>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </div>
        </Link>,
      ],
    },
    {
      items: [
        <EuiFlexGroup
          justifyContent="center"
          alignItems="center"
          direction="row"
          style={{ gap: "2vw" }}
        >
          <EuiFlexItem grow={false} style={{ flexBasis: "fit-content" }}>
            {isDarkTheme ? (
              <EuiButtonIcon
                onClick={invertTheme}
                iconType="sun"
                display="fill"
                size="s"
                color="warning"
                aria-label="theme-button-light"
              />
            ) : (
              <EuiButtonIcon
                onClick={invertTheme}
                iconType="moon"
                display="fill"
                size="s"
                color="ghost"
                aria-label="theme-button-dark"
              />
            )}
          </EuiFlexItem>
          <EuiFlexItem grow={false} style={{ flexBasis: "fit-content" }}>
            <EuiButtonIcon
              onClick={logout}
              iconType="lock"
              display="fill"
              size="s"
              aria-label="logout-button"
            />
          </EuiFlexItem>
        </EuiFlexGroup>,
      ],
    },
  ];

  useEffect(() => {
    if (window.innerWidth < 480) {
      // sectionSpliced.splice(1, 1);
      // setSection(sectionSpliced);
      setIsResponsive(true);
    }
  }, []);

  return (
    <>
      <EuiHeader
        style={{ minHeight: "8vh" }}
        theme="dark"
        sections={isResponsive ? responsiveSection : section}
      />
      <div style={{ backgroundColor: isDarkTheme ? '#1D1E24' : '#ffffff', minHeight: '8vh' }}>
        <EuiHeader
          theme={isDarkTheme ? "dark" : "default"}
          style={{ 
            minHeight: "8vh",
            backgroundColor: 'transparent'
          }}
          sections={[
            {
              breadcrumbs: breadCrumbs.map(crumb => ({
                ...crumb,
                onClick: (e: any) => {
                  if (crumb.onClick) crumb.onClick();
                },
                onMouseEnter: (e: any) => {
                  e.target.style.backgroundColor = '#ff6600';
                  e.target.style.color = '#ffffff';
                  e.target.style.boxShadow = '0 0 30px rgba(255, 102, 0, 0.8)';
                  e.target.style.transform = 'translateY(-2px) scale(1.05)';
                  e.target.style.filter = 'brightness(1.3)';
                },
                onMouseLeave: (e: any) => {
                  e.target.style.backgroundColor = '#1a237e';
                  e.target.style.color = '#ffffff';
                  e.target.style.boxShadow = 'none';
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.filter = 'brightness(1)';
                },
                style: {
                  fontSize: '18px',
                  fontWeight: 'bold',
                  padding: '12px 20px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#1a237e',
                  color: '#ffffff',
                  border: `2px solid ${isDarkTheme ? '#4da6ff' : '#0b5cff'}`,
                  cursor: 'pointer',
                  textDecoration: 'none'
                }
              })),
            },
          ]}
        />
      </div>
    </>
  );
}
