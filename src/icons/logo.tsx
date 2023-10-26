import React from 'react';
import { defaultProps } from './base';
import { IProps } from './types';

const LogoIcon = (props: IProps) => (
    <svg {...defaultProps} {...props} className={'logo-icon'} viewBox="-2 -2 64 64" fill="none">
        <g>
            <path d="M45.193,15.034l1.188-0.285l-0.513-1.108c-0.747-1.613-3.4-4.428-8.09-3.563c-0.339,0.063-0.666,0.155-0.986,0.266
                c1.825-3,5.66-5.323,8.418-6.035l1.892-0.488L45.6,2.572c-0.149-0.124-3.694-3.034-8.188-2.509
                c-3.648,0.422-6.402,1.981-8.218,4.621c-1.33-0.806-3.009-1.389-5.127-1.617c-4.225-0.452-7.578,2.095-7.719,2.203l-1.651,1.277
                l2.03,0.487c3.042,0.729,7.215,3.243,8.477,6.32c-0.334-0.108-0.682-0.206-1.061-0.276c-5.998-1.11-7.101,2.556-7.145,2.712
                l-0.282,1.001l1.012,0.243c2.756,0.661,4.057,1.753,4.672,2.625c-3.981,0.848-6.68,2.613-8.309,5.389
                c-2.131,3.63-2.13,8.567-2.13,13.793v0.22c0,11.028,7.602,20,16.945,20h0.456c9.343,0,16.944-8.972,16.944-20v-0.22
                c0-3.308-0.003-6.497-0.543-9.315l0.031-0.02l-0.054-0.081c-0.314-1.595-0.797-3.073-1.563-4.377
                c-1.479-2.52-3.841-4.207-7.241-5.131C38.386,18.315,41.398,15.944,45.193,15.034z M37.642,2.05
                c1.993-0.228,3.804,0.408,5.036,1.034c-3.563,1.541-7.815,4.823-8.747,8.995c-0.015,0.013-0.028,0.027-0.042,0.04
                c-0.004-0.021-0.009-0.042-0.013-0.063c-0.024-0.134-0.054-0.271-0.082-0.408c-0.028-0.135-0.054-0.269-0.086-0.405
                c-0.04-0.168-0.087-0.337-0.134-0.507c-0.028-0.101-0.055-0.201-0.086-0.303c-0.062-0.203-0.132-0.406-0.205-0.609
                c-0.023-0.062-0.044-0.124-0.068-0.186c-0.09-0.237-0.19-0.471-0.297-0.705c-0.01-0.022-0.02-0.043-0.03-0.065
                c-0.493-1.06-1.174-2.081-2.112-2.97C32.26,3.7,34.565,2.405,37.642,2.05z M19.4,5.822c1.14-0.499,2.718-0.951,4.453-0.767
                C26.12,5.299,27.78,6.029,29,7.032c0.223,0.184,0.433,0.375,0.626,0.576c0.041,0.042,0.087,0.082,0.127,0.125
                c0.239,0.261,0.454,0.535,0.649,0.817c0.026,0.037,0.049,0.075,0.074,0.112c0.188,0.283,0.359,0.573,0.508,0.87
                c0.003,0.005,0.005,0.01,0.008,0.015c0.322,0.645,0.557,1.316,0.727,1.982c0.003,0.01,0.005,0.02,0.008,0.03
                c0.165,0.654,0.266,1.301,0.325,1.914c0.005,0.054,0.008,0.108,0.013,0.162c0.013,0.153,0.02,0.298,0.028,0.446
                c-0.043,0.056-0.09,0.112-0.132,0.168c-0.113,0.119-0.201,0.248-0.262,0.359c-0.048,0.068-0.088,0.135-0.134,0.203
                c-0.148,0.215-0.289,0.428-0.424,0.641c-0.046,0.074-0.091,0.146-0.136,0.219c-0.156,0.253-0.302,0.501-0.44,0.746
                c-0.019,0.033-0.038,0.066-0.056,0.099c-0.32,0.575-0.59,1.113-0.807,1.58c-0.319-1.169-0.967-2.449-2.132-3.446
                C27.238,10.724,23.178,7.405,19.4,5.822z M24.513,19.312c-0.577-1.222-1.894-2.79-4.886-3.811c0.66-0.468,1.896-0.875,4.15-0.457
                c1.018,0.189,1.772,0.573,2.355,1.037c0.138,0.11,0.267,0.224,0.385,0.343c0.064,0.065,0.127,0.129,0.186,0.196
                c0.129,0.149,0.249,0.301,0.353,0.456c0.025,0.037,0.051,0.073,0.074,0.11c0.418,0.665,0.624,1.351,0.726,1.887
                c-0.037,0.001-0.071,0.004-0.108,0.005c-1.147,0.03-2.22,0.108-3.227,0.231C24.518,19.311,24.515,19.312,24.513,19.312z
                M42.45,26.06c0.012,0.021,0.02,0.044,0.032,0.065l-3.229,3.229l1.414,1.414l2.138-2.137l1.06,1.591
                c0.253,1.451,0.36,3.039,0.405,4.736l-1.31-1.31l-3.707,3.707l1.414,1.414l2.293-2.293l1.293,1.293l0.05-0.05
                c0.001,0.373,0.002,0.742,0.002,1.122v0.22c0,1.168-0.1,2.308-0.278,3.415l-1.264-0.632l-3.51,3.51l1.414,1.414l2.49-2.49
                l0.446,0.223c-1.919,7.274-7.577,12.56-14.243,12.56h-0.456c-6.601,0-12.207-5.187-14.18-12.351l0.235-0.235l2.293,2.293
                l1.414-1.414l-3.707-3.707l-0.734,0.734c-0.168-1.078-0.266-2.185-0.266-3.32v-0.22c0-0.464,0.001-0.916,0.002-1.368l0.998-0.998
                l2.293,2.293l1.414-1.414l-3.707-3.707l-0.951,0.951c0.07-2.167,0.249-4.157,0.725-5.897l0.226-0.226l2.293,2.293l1.414-1.414
                l-2.998-2.998c0.052-0.096,0.09-0.202,0.146-0.296c1.177-2.006,3.108-3.376,5.902-4.169l-3.463,3.463l1.414,1.414l2.293-2.293
                l2.293,2.293l1.414-1.414l-3.569-3.569c0.535-0.138,1.103-0.253,1.699-0.351l0.213-0.033c1.458-0.225,3.104-0.339,4.95-0.339h0.4
                c0.216,0,0.422,0.006,0.633,0.009l0.021,0.002c1.871,0.029,3.557,0.185,5.012,0.463l0.363,0.07c0.169,0.036,0.338,0.071,0.502,0.11
                l-3.639,3.639l1.414,1.414l2.293-2.293l2.293,2.293l1.414-1.414l-3.596-3.596C39.128,22.526,41.206,23.941,42.45,26.06z
                M31.438,19.117c-0.001,0-0.002,0-0.003,0c0.114-0.251,0.249-0.532,0.399-0.83c0.018-0.036,0.036-0.071,0.054-0.108
                c0.06-0.118,0.125-0.241,0.19-0.364c0.073-0.136,0.148-0.274,0.227-0.415c0.033-0.06,0.065-0.118,0.099-0.178
                c0.137-0.238,0.282-0.481,0.438-0.727c0.003-0.005,0.006-0.009,0.009-0.014c0.161-0.254,0.332-0.511,0.513-0.766l0.595-0.776
                c0.473-0.582,0.982-1.104,1.517-1.546l0.285-0.235l0.002-0.011c0.722-0.54,1.516-0.94,2.377-1.1
                c2.733-0.508,4.357,0.564,5.191,1.445c-4.115,1.383-7.318,4.218-8.595,5.959C33.718,19.284,32.615,19.176,31.438,19.117z"/>
            <polygon points="21.96,45.647 18.253,49.354 19.667,50.768 21.96,48.475 24.253,50.768 25.667,49.354 	"/>
            <polygon points="25.253,54.354 26.667,55.768 28.96,53.475 31.253,55.768 32.667,54.354 28.96,50.647 	"/>
            <polygon points="32.253,49.354 33.667,50.768 35.96,48.475 38.253,50.768 39.667,49.354 35.96,45.647 	"/>
            <polygon points="21.96,40.475 24.253,42.768 25.667,41.354 21.96,37.647 18.253,41.354 19.667,42.768 	"/>
            <polygon points="25.253,45.354 26.667,46.768 28.96,44.475 31.253,46.768 32.667,45.354 28.96,41.647 	"/>
            <polygon points="32.253,41.354 33.667,42.768 35.96,40.475 38.253,42.768 39.667,41.354 35.96,37.647 	"/>
            <polygon points="21.96,32.475 24.253,34.768 25.667,33.354 21.96,29.647 18.253,33.354 19.667,34.768 	"/>
            <polygon points="28.96,33.647 25.253,37.354 26.667,38.768 28.96,36.475 31.253,38.768 32.667,37.354 	"/>
            <polygon points="32.253,33.354 33.667,34.768 35.96,32.475 38.253,34.768 39.667,33.354 35.96,29.647 	"/>
            <polygon points="28.96,28.475 31.253,30.768 32.667,29.354 28.96,25.647 25.253,29.354 26.667,30.768 	"/>
        </g>
    </svg>
);

export default LogoIcon;