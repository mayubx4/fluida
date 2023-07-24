import React, { useState } from 'react';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import useStyles from '../themes/TasksSecondStyles';

const TasksSecond = () => {
  const classes = useStyles();
  const [hover, setHover] = useState(0);
  const handleHover = (h) => {
    setHover(h);
  }
  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.heading}>Lorem ipsum dolor sit amet</Typography>
        <Typography className={classes.subHeading}>Lorem ipsum dolor sit amet, consectetur</Typography>
      </div>
      <div className={classes.secondDiv}>
        <div className={classes.firstPart}>
          <div onMouseEnter={() => handleHover(1)} onMouseLeave={() => handleHover(0)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="54.689" height="65" viewBox="0 0 54.689 65">
              <path className={clsx({ [classes.hover]: hover === 1 })} id="Path_87" data-name="Path 87" d="M51.27,26.862H47.918v-6.3h3.33V17.207h2.974v3.308h3.351v6.327H54.221v.021H51.27ZM39.88,56.446c0,.156,0,.272.006.348,0,.047-.007.09-.01.136a4.843,4.843,0,0,0,4.832,4.644H87.694V56.839a1.713,1.713,0,1,1,3.426,0v6.448A1.714,1.714,0,0,1,89.407,65H44.449a1.709,1.709,0,0,1-.261-.026,8.272,8.272,0,0,1-7.749-8.242c0-.1.012-.2.015-.3-.053-5.086,0-43.779.006-47.989a1.585,1.585,0,0,1-.018-.178A8.277,8.277,0,0,1,44.71,0H89.405a1.713,1.713,0,0,1,1.713,1.713V50.131a1.714,1.714,0,0,1-1.713,1.713c-.01,0-.018,0-.028,0a1.684,1.684,0,0,1-.392.05H44.708A4.844,4.844,0,0,0,39.88,56.446ZM70.665,17.207H84.028v2.952H80.676v3.352H77.347v3.352H73.995v3.33H70.664v7.059H87.758V33.544H74.373V30.592h3.352V27.24h3.329V23.888h3.352V20.559h3.351V13.477H70.665ZM63.109,27.24h7.962V23.511H63.109V27.24Zm-18.9,10.011h3.708V30.592H51.27V30.57h6.3v6.682H61.3V20.159H57.95V16.785H54.6V13.477H50.89v3.352H47.539v3.352h-3.33V37.251Z" transform="translate(-36.431)" fill="#c2cbd8" />
            </svg>
            <Typography className={clsx(classes.txt, { [classes.hover]: hover === 1 })}>Lorem ipsum dolor sit amet, consectetur</Typography>
          </div>
          <div onMouseEnter={() => handleHover(2)} onMouseLeave={() => handleHover(0)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="71.557" height="65" viewBox="0 0 71.557 65">
              <g id="check-box" transform="translate(0 -20.159)">
                <g id="Group_125" data-name="Group 125" transform="translate(0 20.159)">
                  <path className={clsx({ [classes.hover]: hover === 2 })} id="Path_85" data-name="Path 85" d="M53.231,85.763H9.757V42.289H43.688l9.757-9.757H0V95.52H62.988V55.188l-9.757,9.757Z" transform="translate(0 -30.52)" fill="#c2cbd8" />
                  <path className={clsx({ [classes.hover]: hover === 2 })} id="Path_86" data-name="Path 86" d="M90.208,45.042l-6.9,6.9L99.871,68.5l41.446-41.446-6.9-6.9L99.871,54.706Z" transform="translate(-69.76 -20.159)" fill="#c2cbd8" />
                </g>
              </g>
            </svg>
            <Typography className={clsx(classes.txt, { [classes.hover]: hover === 2 })}>Lorem ipsum dolor sit amet, consectetur</Typography>
          </div>
          <div onMouseEnter={() => handleHover(3)} onMouseLeave={() => handleHover(0)}>
            <svg id="heart-inside-circle" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65">
              <path className={clsx({ [classes.hover]: hover === 3 })} id="Path_88" data-name="Path 88" d="M32.5,0A32.5,32.5,0,1,0,65,32.5,32.5,32.5,0,0,0,32.5,0ZM50.035,11.313a29.75,29.75,0,0,1,9.581,16.6l-7.283,1.434A22.326,22.326,0,0,0,45.151,16.9ZM32.5,5.135a29.577,29.577,0,0,1,9.581,1.585l-2.4,7.024a22.328,22.328,0,0,0-14.365,0l-2.4-7.024A29.577,29.577,0,0,1,32.5,5.135ZM14.965,53.688a29.751,29.751,0,0,1-9.581-16.6l7.283-1.434A22.328,22.328,0,0,0,19.849,48.1Zm.265-31.158a22.171,22.171,0,0,0-2.563,6.813L5.384,27.908a29.748,29.748,0,0,1,9.581-16.6l4.884,5.59A22.176,22.176,0,0,0,15.23,22.529ZM32.5,59.865a29.577,29.577,0,0,1-9.582-1.585l2.4-7.024a22.328,22.328,0,0,0,14.365,0l2.4,7.024A29.589,29.589,0,0,1,32.5,59.865Zm0-17.563S21.438,36.913,21.438,28.521A5.824,5.824,0,0,1,32.5,25.979a5.824,5.824,0,0,1,11.063,2.542C43.563,36.913,32.5,42.3,32.5,42.3Zm23.7,3.88a29.58,29.58,0,0,1-6.163,7.506L45.151,48.1a22.326,22.326,0,0,0,7.182-12.44l7.283,1.434A29.6,29.6,0,0,1,56.2,46.182Z" fill="#c2cbd8" />
            </svg>
            <Typography className={clsx(classes.txt, { [classes.hover]: hover === 3 })}>Lorem ipsum dolor sit amet, consectetur</Typography>
          </div>
          <div onMouseEnter={() => handleHover(4)} onMouseLeave={() => handleHover(0)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="69.193" height="65" viewBox="0 0 69.193 65">
              <g id="open-folder-with-document" transform="translate(0 -17.959)">
                <path className={clsx({ [classes.hover]: hover === 4 })} id="Path_89" data-name="Path 89" d="M68.768,57.442,56.541,80.583a4.836,4.836,0,0,1-3.6,2.368L3.9,82.959a3.9,3.9,0,0,1-3.9-3.9L.008,40.98a3.9,3.9,0,0,1,3.9-3.9l3.585,0V40.4h-2.4a1.77,1.77,0,0,0-1.771,1.771l0,35.692A1.771,1.771,0,0,0,5.1,79.635H7.554L19.142,56.193a3.928,3.928,0,0,1,3.2-2.368H50.72l.01-9.434A3.634,3.634,0,0,1,54.045,48v5.828H67.061C68.6,53.841,69.892,55.361,68.768,57.442ZM9.753,67.835c-.106-11.668,0-46.674,0-46.674a3.2,3.2,0,0,1,3.2-3.2H38.587a1.466,1.466,0,0,1,1.08.474l8.287,9a1.473,1.473,0,0,1,.388.994V51.756H45.653V30.445a.669.669,0,0,0-.669-.668H38.641A1.346,1.346,0,0,1,37.3,28.433V21.316a.669.669,0,0,0-.669-.668H12.955a.513.513,0,0,0-.513.513V64.9l-2.057,4.162S9.763,69.016,9.753,67.835ZM39.987,27.089H43.98l-3.993-4.341v4.341Zm1.456,5.426H16.669a1.654,1.654,0,0,0,0,3.308H41.444a1.654,1.654,0,1,0,0-3.308ZM43.1,43.8a1.655,1.655,0,0,0-1.655-1.653H16.669a1.653,1.653,0,1,0,0,3.306H41.444A1.656,1.656,0,0,0,43.1,43.8ZM15.014,53.5a1.655,1.655,0,0,0,1.654,1.653h.594A4.957,4.957,0,0,1,20.9,51.848H16.668A1.656,1.656,0,0,0,15.014,53.5Z" transform="translate(0)" fill="#c2cbd8" />
              </g>
            </svg>
            <Typography className={clsx(classes.txt, { [classes.hover]: hover === 4 })}>Lorem ipsum dolor sit amet, consectetur</Typography>
          </div>
          <div onMouseEnter={() => handleHover(5)} onMouseLeave={() => handleHover(0)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="69.193" height="65" viewBox="0 0 69.193 65">
              <g id="open-folder-with-document" transform="translate(0 -17.959)">
                <path className={clsx({ [classes.hover]: hover === 5 })} id="Path_89" data-name="Path 89" d="M68.768,57.442,56.541,80.583a4.836,4.836,0,0,1-3.6,2.368L3.9,82.959a3.9,3.9,0,0,1-3.9-3.9L.008,40.98a3.9,3.9,0,0,1,3.9-3.9l3.585,0V40.4h-2.4a1.77,1.77,0,0,0-1.771,1.771l0,35.692A1.771,1.771,0,0,0,5.1,79.635H7.554L19.142,56.193a3.928,3.928,0,0,1,3.2-2.368H50.72l.01-9.434A3.634,3.634,0,0,1,54.045,48v5.828H67.061C68.6,53.841,69.892,55.361,68.768,57.442ZM9.753,67.835c-.106-11.668,0-46.674,0-46.674a3.2,3.2,0,0,1,3.2-3.2H38.587a1.466,1.466,0,0,1,1.08.474l8.287,9a1.473,1.473,0,0,1,.388.994V51.756H45.653V30.445a.669.669,0,0,0-.669-.668H38.641A1.346,1.346,0,0,1,37.3,28.433V21.316a.669.669,0,0,0-.669-.668H12.955a.513.513,0,0,0-.513.513V64.9l-2.057,4.162S9.763,69.016,9.753,67.835ZM39.987,27.089H43.98l-3.993-4.341v4.341Zm1.456,5.426H16.669a1.654,1.654,0,0,0,0,3.308H41.444a1.654,1.654,0,1,0,0-3.308ZM43.1,43.8a1.655,1.655,0,0,0-1.655-1.653H16.669a1.653,1.653,0,1,0,0,3.306H41.444A1.656,1.656,0,0,0,43.1,43.8ZM15.014,53.5a1.655,1.655,0,0,0,1.654,1.653h.594A4.957,4.957,0,0,1,20.9,51.848H16.668A1.656,1.656,0,0,0,15.014,53.5Z" transform="translate(0)" fill="#c2cbd8" />
              </g>
            </svg>
            <Typography className={clsx(classes.txt, { [classes.hover]: hover === 5 })}>Lorem ipsum dolor sit amet, consectetur</Typography>
          </div>
        </div>
        <div className={classes.firstPart}>
          <div onMouseEnter={() => handleHover(6)} onMouseLeave={() => handleHover(0)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="54.689" height="65" viewBox="0 0 54.689 65">
              <path className={clsx({ [classes.hover]: hover === 6 })} id="Path_87" data-name="Path 87" d="M51.27,26.862H47.918v-6.3h3.33V17.207h2.974v3.308h3.351v6.327H54.221v.021H51.27ZM39.88,56.446c0,.156,0,.272.006.348,0,.047-.007.09-.01.136a4.843,4.843,0,0,0,4.832,4.644H87.694V56.839a1.713,1.713,0,1,1,3.426,0v6.448A1.714,1.714,0,0,1,89.407,65H44.449a1.709,1.709,0,0,1-.261-.026,8.272,8.272,0,0,1-7.749-8.242c0-.1.012-.2.015-.3-.053-5.086,0-43.779.006-47.989a1.585,1.585,0,0,1-.018-.178A8.277,8.277,0,0,1,44.71,0H89.405a1.713,1.713,0,0,1,1.713,1.713V50.131a1.714,1.714,0,0,1-1.713,1.713c-.01,0-.018,0-.028,0a1.684,1.684,0,0,1-.392.05H44.708A4.844,4.844,0,0,0,39.88,56.446ZM70.665,17.207H84.028v2.952H80.676v3.352H77.347v3.352H73.995v3.33H70.664v7.059H87.758V33.544H74.373V30.592h3.352V27.24h3.329V23.888h3.352V20.559h3.351V13.477H70.665ZM63.109,27.24h7.962V23.511H63.109V27.24Zm-18.9,10.011h3.708V30.592H51.27V30.57h6.3v6.682H61.3V20.159H57.95V16.785H54.6V13.477H50.89v3.352H47.539v3.352h-3.33V37.251Z" transform="translate(-36.431)" fill="#c2cbd8" />
            </svg>
            <Typography className={clsx(classes.txt, { [classes.hover]: hover === 6 })}>Lorem ipsum dolor sit amet, consectetur</Typography>
          </div>
          <div onMouseEnter={() => handleHover(7)} onMouseLeave={() => handleHover(0)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="71.557" height="65" viewBox="0 0 71.557 65">
              <g id="check-box" transform="translate(0 -20.159)">
                <g id="Group_125" data-name="Group 125" transform="translate(0 20.159)">
                  <path className={clsx({ [classes.hover]: hover === 7 })} id="Path_85" data-name="Path 85" d="M53.231,85.763H9.757V42.289H43.688l9.757-9.757H0V95.52H62.988V55.188l-9.757,9.757Z" transform="translate(0 -30.52)" fill="#c2cbd8" />
                  <path className={clsx({ [classes.hover]: hover === 7 })} id="Path_86" data-name="Path 86" d="M90.208,45.042l-6.9,6.9L99.871,68.5l41.446-41.446-6.9-6.9L99.871,54.706Z" transform="translate(-69.76 -20.159)" fill="#c2cbd8" />
                </g>
              </g>
            </svg>
            <Typography className={clsx(classes.txt, { [classes.hover]: hover === 7 })}>Lorem ipsum dolor sit amet, consectetur</Typography>
          </div>
          <div onMouseEnter={() => handleHover(8)} onMouseLeave={() => handleHover(0)}>
            <svg id="heart-inside-circle" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65">
              <path className={clsx({ [classes.hover]: hover === 8 })} id="Path_88" data-name="Path 88" d="M32.5,0A32.5,32.5,0,1,0,65,32.5,32.5,32.5,0,0,0,32.5,0ZM50.035,11.313a29.75,29.75,0,0,1,9.581,16.6l-7.283,1.434A22.326,22.326,0,0,0,45.151,16.9ZM32.5,5.135a29.577,29.577,0,0,1,9.581,1.585l-2.4,7.024a22.328,22.328,0,0,0-14.365,0l-2.4-7.024A29.577,29.577,0,0,1,32.5,5.135ZM14.965,53.688a29.751,29.751,0,0,1-9.581-16.6l7.283-1.434A22.328,22.328,0,0,0,19.849,48.1Zm.265-31.158a22.171,22.171,0,0,0-2.563,6.813L5.384,27.908a29.748,29.748,0,0,1,9.581-16.6l4.884,5.59A22.176,22.176,0,0,0,15.23,22.529ZM32.5,59.865a29.577,29.577,0,0,1-9.582-1.585l2.4-7.024a22.328,22.328,0,0,0,14.365,0l2.4,7.024A29.589,29.589,0,0,1,32.5,59.865Zm0-17.563S21.438,36.913,21.438,28.521A5.824,5.824,0,0,1,32.5,25.979a5.824,5.824,0,0,1,11.063,2.542C43.563,36.913,32.5,42.3,32.5,42.3Zm23.7,3.88a29.58,29.58,0,0,1-6.163,7.506L45.151,48.1a22.326,22.326,0,0,0,7.182-12.44l7.283,1.434A29.6,29.6,0,0,1,56.2,46.182Z" fill="#c2cbd8" />
            </svg>
            <Typography className={clsx(classes.txt, { [classes.hover]: hover === 8 })}>Lorem ipsum dolor sit amet, consectetur</Typography>
          </div>
          <div onMouseEnter={() => handleHover(9)} onMouseLeave={() => handleHover(0)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="69.193" height="65" viewBox="0 0 69.193 65">
              <g id="open-folder-with-document" transform="translate(0 -17.959)">
                <path className={clsx({ [classes.hover]: hover === 9 })} id="Path_89" data-name="Path 89" d="M68.768,57.442,56.541,80.583a4.836,4.836,0,0,1-3.6,2.368L3.9,82.959a3.9,3.9,0,0,1-3.9-3.9L.008,40.98a3.9,3.9,0,0,1,3.9-3.9l3.585,0V40.4h-2.4a1.77,1.77,0,0,0-1.771,1.771l0,35.692A1.771,1.771,0,0,0,5.1,79.635H7.554L19.142,56.193a3.928,3.928,0,0,1,3.2-2.368H50.72l.01-9.434A3.634,3.634,0,0,1,54.045,48v5.828H67.061C68.6,53.841,69.892,55.361,68.768,57.442ZM9.753,67.835c-.106-11.668,0-46.674,0-46.674a3.2,3.2,0,0,1,3.2-3.2H38.587a1.466,1.466,0,0,1,1.08.474l8.287,9a1.473,1.473,0,0,1,.388.994V51.756H45.653V30.445a.669.669,0,0,0-.669-.668H38.641A1.346,1.346,0,0,1,37.3,28.433V21.316a.669.669,0,0,0-.669-.668H12.955a.513.513,0,0,0-.513.513V64.9l-2.057,4.162S9.763,69.016,9.753,67.835ZM39.987,27.089H43.98l-3.993-4.341v4.341Zm1.456,5.426H16.669a1.654,1.654,0,0,0,0,3.308H41.444a1.654,1.654,0,1,0,0-3.308ZM43.1,43.8a1.655,1.655,0,0,0-1.655-1.653H16.669a1.653,1.653,0,1,0,0,3.306H41.444A1.656,1.656,0,0,0,43.1,43.8ZM15.014,53.5a1.655,1.655,0,0,0,1.654,1.653h.594A4.957,4.957,0,0,1,20.9,51.848H16.668A1.656,1.656,0,0,0,15.014,53.5Z" transform="translate(0)" fill="#c2cbd8" />
              </g>
            </svg>
            <Typography className={clsx(classes.txt, { [classes.hover]: hover === 9 })}>Lorem ipsum dolor sit amet, consectetur</Typography>
          </div>
          <div onMouseEnter={() => handleHover(10)} onMouseLeave={() => handleHover(0)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="69.193" height="65" viewBox="0 0 69.193 65">
              <g id="open-folder-with-document" transform="translate(0 -17.959)">
                <path className={clsx({ [classes.hover]: hover === 10 })} id="Path_89" data-name="Path 89" d="M68.768,57.442,56.541,80.583a4.836,4.836,0,0,1-3.6,2.368L3.9,82.959a3.9,3.9,0,0,1-3.9-3.9L.008,40.98a3.9,3.9,0,0,1,3.9-3.9l3.585,0V40.4h-2.4a1.77,1.77,0,0,0-1.771,1.771l0,35.692A1.771,1.771,0,0,0,5.1,79.635H7.554L19.142,56.193a3.928,3.928,0,0,1,3.2-2.368H50.72l.01-9.434A3.634,3.634,0,0,1,54.045,48v5.828H67.061C68.6,53.841,69.892,55.361,68.768,57.442ZM9.753,67.835c-.106-11.668,0-46.674,0-46.674a3.2,3.2,0,0,1,3.2-3.2H38.587a1.466,1.466,0,0,1,1.08.474l8.287,9a1.473,1.473,0,0,1,.388.994V51.756H45.653V30.445a.669.669,0,0,0-.669-.668H38.641A1.346,1.346,0,0,1,37.3,28.433V21.316a.669.669,0,0,0-.669-.668H12.955a.513.513,0,0,0-.513.513V64.9l-2.057,4.162S9.763,69.016,9.753,67.835ZM39.987,27.089H43.98l-3.993-4.341v4.341Zm1.456,5.426H16.669a1.654,1.654,0,0,0,0,3.308H41.444a1.654,1.654,0,1,0,0-3.308ZM43.1,43.8a1.655,1.655,0,0,0-1.655-1.653H16.669a1.653,1.653,0,1,0,0,3.306H41.444A1.656,1.656,0,0,0,43.1,43.8ZM15.014,53.5a1.655,1.655,0,0,0,1.654,1.653h.594A4.957,4.957,0,0,1,20.9,51.848H16.668A1.656,1.656,0,0,0,15.014,53.5Z" transform="translate(0)" fill="#c2cbd8" />
              </g>
            </svg>
            <Typography className={clsx(classes.txt, { [classes.hover]: hover === 10 })}>Lorem ipsum dolor sit amet, consectetur</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksSecond;
