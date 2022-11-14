export const Contract = ({ entreprise, start, end, offer, unique }) => (
  <svg
    style={{
      transform: "scale(1.3)",
    }}
    xmlns="http://www.w3.org/2000/svg"
    xlink="http://www.w3.org/1999/xlink"
    width="414"
    height="555"
    viewBox="0 0 414 555"
  >
    <defs>
      <clipPath id="clip-iPhone_6_7_8_Plus_1">
        <rect width="414" height="555" />
      </clipPath>
    </defs>
    <g id="iPhone_6_7_8_Plus_1" clipPath="url(#clip-iPhone_6_7_8_Plus_1)">
      <rect width="414" height="555" fill="rgba(0,0,0,0.87)" />
      <image
        id="contract-certificate-deal-construction-badge-26879"
        width="64"
        height="64"
        transform="translate(328 10)"
        href="data:image/png;base64,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"
      />
      <g id="Group_2" transform="translate(-201 -8)">
        <g id="Group_1" transform="translate(227 40)">
          <text
            id="CONTRAT_d_assurance"
            transform="translate(0 13)"
            fill="#fff"
            fontSize="12"
            fontFamily="SegoeUI, Segoe UI"
          >
            <tspan x="0" y="0">
              CONTRAT D&apos;ASSURANCE
            </tspan>
          </text>
        </g>
        <line
          id="Line_1"
          x2="133"
          transform="translate(227 56)"
          fill="none"
          stroke="#fff"
          strokeWidth="1"
        />
      </g>
      <g id="Group_4" transform="translate(29 10)">
        <text
          id="Nom"
          transform="translate(38 95)"
          fill="#fff"
          fontSize="13"
          fontFamily="ArialMT, Arial"
        >
          <tspan x="0" y="0">
            Nom
          </tspan>
        </text>
        <g id="Group_3" transform="translate(-40 -3)">
          <rect
            id="Rectangle_2"
            width="115"
            height="16"
            rx="3"
            transform="translate(78 104)"
            fill="#fff"
          />
          <text
            id="PowerHydra"
            transform="translate(87 115)"
            fontSize="8"
            fontFamily="Montserrat-Regular, Montserrat"
          >
            <tspan x="0" y="0">
              {String(entreprise?.nom)}
            </tspan>
          </text>
        </g>
      </g>
      <g id="Group_5" transform="translate(207 7)">
        <text
          id="Tel."
          transform="translate(29 101)"
          fill="#fff"
          fontSize="13"
          fontFamily="ArialMT, Arial"
        >
          <tspan x="0" y="0">
            Tel.
          </tspan>
        </text>
        <g id="Group_3-2" transform="translate(-52)">
          <rect
            id="Rectangle_2-2"
            width="115"
            height="16"
            rx="3"
            transform="translate(78 104)"
            fill="#fff"
          />
          <text
            id="_216_29_974_720"
            transform="translate(81 115)"
            fontSize="8"
            fontFamily="Montserrat-Regular, Montserrat"
          >
            <tspan x="0" y="0">
              {String(entreprise?.tel)}
            </tspan>
          </text>
        </g>
      </g>
      <g id="Group_6" transform="translate(23 52)">
        <text
          id="Adresse"
          transform="translate(44 101)"
          fill="#fff"
          fontSize="13"
          fontFamily="ArialMT, Arial"
        >
          <tspan x="0" y="0">
            Adresse
          </tspan>
        </text>
        <g id="Group_3-3" transform="translate(-34)">
          <rect
            id="Rectangle_2-3"
            width="115"
            height="16"
            rx="3"
            transform="translate(78 104)"
            fill="#fff"
          />
          <text
            id="_90_Rue_al_akhoutaf"
            transform="translate(83 115)"
            fontSize="8"
            fontFamily="Montserrat-Regular, Montserrat"
          >
            <tspan x="0" y="0">
              {String(entreprise?.adresse)}
            </tspan>
          </text>
        </g>
      </g>
      <g id="Group_7" transform="translate(189 52)">
        <text
          id="Matricule_Fiscal"
          transform="translate(44 101)"
          fill="#fff"
          fontSize="11"
          fontFamily="Arial-BoldMT, Arial"
          fontWeight="700"
        >
          <tspan x="0" y="0">
            Matricule Fiscal
          </tspan>
        </text>
        <g id="Group_3-4" transform="translate(-34)">
          <rect
            id="Rectangle_2-4"
            width="115"
            height="16"
            rx="3"
            transform="translate(78 104)"
            fill="#fff"
          />
          <text
            id="_653215654897"
            transform="translate(83 115)"
            fontSize="8"
            fontFamily="Montserrat-Regular, Montserrat"
          >
            <tspan x="0" y="0">
              {String(entreprise?.matFiscal)}
            </tspan>
          </text>
        </g>
      </g>
      <line
        id="Line_2"
        x2="281"
        transform="translate(67.5 218.5)"
        fill="none"
        stroke="#fff"
        strokeWidth="1"
      />
      <g id="Group_8" transform="translate(29 183)">
        <text
          id="Periode"
          transform="translate(38 95)"
          fill="#fff"
          fontSize="13"
          fontFamily="ArialMT, Arial"
        >
          <tspan x="0" y="0">
            Periode
          </tspan>
        </text>
        <g id="Group_3-5" transform="translate(-40 -3)">
          <rect
            id="Rectangle_2-5"
            width="115"
            height="16"
            rx="3"
            transform="translate(78 104)"
            fill="#fff"
          />
          <text
            id="_3"
            transform="translate(87 115)"
            fontSize="8"
            fontFamily="Montserrat-Regular, Montserrat"
          >
            <tspan x="0" y="0">
              {String(
                new Date(parseInt(end)).getFullYear() -
                  new Date(start).getFullYear()
              )}
            </tspan>
          </text>
        </g>
      </g>
      <g id="Group_9" transform="translate(195 182)">
        <text
          id="Plafond_Annuel"
          transform="translate(38 95)"
          fill="#fff"
          fontSize="13"
          fontFamily="ArialMT, Arial"
        >
          <tspan x="0" y="0">
            Plafond Annuel
          </tspan>
        </text>
        <g id="Group_3-6" transform="translate(-40 -3)">
          <rect
            id="Rectangle_2-6"
            width="115"
            height="16"
            rx="3"
            transform="translate(78 104)"
            fill="#fff"
          />
          <text
            id="_1500"
            transform="translate(87 115)"
            fontSize="8"
            fontFamily="Montserrat-Regular, Montserrat"
          >
            <tspan x="0" y="0">
              {String(offer?.plafond)}
            </tspan>
          </text>
          <text
            id="DT"
            transform="translate(112 115)"
            fontSize="8"
            fontFamily="Montserrat-Regular, Montserrat"
          >
            <tspan x="0" y="0">
              DT
            </tspan>
          </text>
        </g>
      </g>
      <g id="Group_10" transform="translate(29 231)">
        <text
          id="Début"
          transform="translate(38 95)"
          fill="#fff"
          fontSize="13"
          fontFamily="ArialMT, Arial"
        >
          <tspan x="0" y="0">
            Début
          </tspan>
        </text>
        <g id="Group_3-7" transform="translate(-40 -3)">
          <rect
            id="Rectangle_2-7"
            width="115"
            height="16"
            rx="3"
            transform="translate(78 104)"
            fill="#fff"
          />
          <text
            id="_2021-06-05"
            transform="translate(87 115)"
            fontSize="8"
            fontFamily="Montserrat-Regular, Montserrat"
          >
            <tspan x="0" y="0">
              {String(
                `${new Date(start).getDate()} / ${
                  new Date(start).getMonth() + 1
                } / ${new Date(start).getFullYear()}`
              )}
            </tspan>
          </text>
        </g>
      </g>
      <g id="Group_11" transform="translate(195 232)">
        <text
          id="Fin"
          transform="translate(38 95)"
          fill="#fff"
          fontSize="13"
          fontFamily="ArialMT, Arial"
        >
          <tspan x="0" y="0">
            Fin
          </tspan>
        </text>
        <g id="Group_3-8" transform="translate(-40 -3)">
          <rect
            id="Rectangle_2-8"
            width="115"
            height="16"
            rx="3"
            transform="translate(78 104)"
            fill="#fff"
          />
          <text
            id="_2024-06-05"
            transform="translate(87 115)"
            fontSize="8"
            fontFamily="Montserrat-Regular, Montserrat"
          >
            <tspan x="0" y="0">
              {String(
                `${new Date(parseInt(end)).getDate()} / ${
                  new Date(parseInt(end)).getMonth() + 1
                } / ${new Date(parseInt(end)).getFullYear()}`
              )}
            </tspan>
          </text>
        </g>
      </g>
      <g id="Group_12" transform="translate(29 280)">
        <text
          id="Offre"
          transform="translate(38 95)"
          fill="#fff"
          fontSize="13"
          fontFamily="ArialMT, Arial"
        >
          <tspan x="0" y="0">
            Offre
          </tspan>
        </text>
        <g id="Group_3-9" transform="translate(-40 -3)">
          <rect
            id="Rectangle_2-9"
            width="115"
            height="16"
            rx="3"
            transform="translate(78 104)"
            fill="#fff"
          />
          <text
            id="ADVANCED"
            transform="translate(87 115)"
            fontSize="8"
            fontFamily="Montserrat-Regular, Montserrat"
          >
            <tspan x="0" y="0">
              {offer?.name?.toUpperCase()}
            </tspan>
          </text>
        </g>
      </g>
      <g id="Group_13" transform="translate(195 280)">
        <text
          id="Code_Unique"
          transform="translate(38 95)"
          fill="#fff"
          fontSize="11"
          fontFamily="Arial-BoldMT, Arial"
          fontWeight="700"
        >
          <tspan x="0" y="0">
            Code Unique
          </tspan>
        </text>
        <g id="Group_3-10" transform="translate(-40 -3)">
          <rect
            id="Rectangle_2-10"
            width="172"
            height="16"
            rx="3"
            transform="translate(78 104)"
            fill="#fff"
          />
          <text
            id="_2aa77970-8e84-484f-af11-ef63f277ac16"
            transform="translate(87 115)"
            fontSize="8"
            fontFamily="Montserrat-Regular, Montserrat"
          >
            <tspan x="0" y="0">
              {unique}
            </tspan>
          </text>
        </g>
      </g>
      <g id="Group_14">
        <g id="signature" transform="translate(278.982 493.65)">
          <path
            id="Path_1"
            d="M7.17,75.252c6.372-1.636,11.564-8.858,14.909-13.016,1.576-1.959,4.823-6.242,3.411-8.6-1.742-2.915-8.482-.091-10.487.993C9.34,57.684,4.449,61.571,1.863,67.089c-4.193,8.949.932,8.556,7.96,5.736"
            transform="translate(0 -35.54)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.7"
          />
          <path
            id="Path_2"
            d="M45.261,57.35C40.976,65.367,35.918,73.1,32.406,81.4c-.513,1.213,2.573-1.3,3.62-2.207C39.118,76.515,41.7,73.4,44.762,70.7c.936-.828-3.144,3.365-2.371,3.861,1.091.7,2.337-1.227,3-1.434.228-.072.383.356.624.331.537-.056.957-.526,1.5-.551.335-.016.546.377.874.442a4.063,4.063,0,0,0,1.373,0c1.512-.228,3-.588,4.493-.882"
            transform="translate(-20.512 -38.957)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.7"
          />
          <path
            id="Path_3"
            d="M78.355,39.254C73.908,49.411,70.2,59.846,65.013,69.724c-1.159,2.206.537-4.853,1.133-7.228.876-3.5,2.077-6.922,3.272-10.342a23.418,23.418,0,0,1,1.511-3.336c1.568-2.916,3.964-7.89,7.3-10.008.455-.289,1.213-.657,1.636-.334.717.549.143,2.369-.126,3-2.213,5.213-4.633,9.629-9.188,13.567-.946.817-5.871,3.673-6.8,2.558-.782-.942,1.44-2.94,1.762-3.225,1.365-1.206,2.788-2.364,4.279-3.447,3.389-2.46,15.545-7.6,19.761-4.337.556.43.038,2.276,0,2.336a46.476,46.476,0,0,1-5.412,7.006A75.719,75.719,0,0,1,62.5,71.281c-3.976,1.932-9.677,4.315-5.916-1.223"
            transform="translate(-35.257 -25.971)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.7"
          />
          <path
            id="Path_4"
            d="M128.35,28.441c11.681-3.439,2.258.32,7.253-.884,35.379-8.523-19.782,3.462,4.5-.663.582-.1.785-.946,1.375-.994.332-.027-.267.707,0,.884a.842.842,0,0,0,1-.221c5.019-8.29,10.394-16.464,14.38-25.181,2.246-4.912-6.264,9.041-9.128,13.7-2.1,3.414-3.932,6.955-5.752,10.493a43.3,43.3,0,0,0-3,6.516c-.349,1.095,1.4-1.925,1.876-2.982.492-1.1-.179-2.873,1-3.424,1.662-.775,3.749.415,5.627.331,3.1-.138,6.186-.552,9.253-.994.78-.112,1.467-.569,2.251-.663.206-.025.292.331.5.331a15.635,15.635,0,0,0,2.251-.331"
            transform="translate(-82.051 0)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="0.7"
          />
        </g>
        <text
          id="SIGNATURE_D_entreprise?"
          transform="translate(256 475)"
          fill="#fff"
          fontSize="10"
          fontFamily="SegoeUI-Bold, Segoe UI"
          fontWeight="700"
        >
          <tspan x="0" y="0">
            SIGNATURE D&apos;ENTREPRISE
          </tspan>
        </text>
      </g>
      <path
        id="Donald-Trump-Signature-2015072935"
        d="M10.622,42.6c1.917-10.559,3.511-21.466,6.5-31.738.084-.289.169-.585.279-.863.291-.732-.991.006-1.109-.456a9.923,9.923,0,0,1-.047,2.633c-.294,4.9-.409,9.8-.545,14.707-.144,5.218-.283,10.439-.6,15.649-.2,3.282-.145,7.3-1.437,10.357-.153.36-.344.351-.085.472-.648-.3-1.084-1.47-1.4-2.1A28.836,28.836,0,0,1,10,43.848,72.3,72.3,0,0,1,8.754,33.094a.836.836,0,1,0-1.67,0c-.148,2.225-.364,4.444-.616,6.657-.288,2.534-.346,7.12-1.984,9.166-.7.878.473,2.166,1.181,1.282,1.811-2.261,1.955-6.323,2.315-9.134.338-2.645.6-5.307.775-7.971H7.085c.292,6.817.863,15.745,4.985,21.221,1.164,1.547,2.637.6,3.212-.933,1.123-2.99,1.2-6.573,1.425-9.747.713-10.137.6-20.321,1.154-30.468.055-1.015.761-4.455-.626-4.94-1.247-.436-1.674,1.965-1.9,2.785-2.8,10.125-4.442,20.738-6.324,31.1-.207,1.144,1.4,1.63,1.612.484h0m1.9,10.29c2.152-5.635,4.347-11.264,6.758-16.776.5-1.148,1.015-2.3,1.61-3.392.815-1.5-.744,1.283-.844-1,.026.586,0,1.18,0,1.768.017,3.9.093,7.805.367,11.695.09,1.268.032,6.453,1.836,6.743,1.993.321,2.231-3.029,2.377-4.465a49.291,49.291,0,0,0-.248-10.472c-.152-1.322-.3-5.306-1.962-5.729-4.021-1.025-4.177,19.485-3.1,22.691.847,2.531,2.773,1.633,3.781-.207a28.379,28.379,0,0,0,2.183-6.267c1.18-4.409,1.978-8.943,2.726-13.457l-1.641-.241c-.644,5.382-1.493,11.184-.9,16.6.173,1.578,1.1,3.54,2.685,2.022,1.1-1.059,1.74-2.956,2.293-4.38a71.113,71.113,0,0,0,2.327-7.388c.226-.845.441-1.693.67-2.536.075-.277.156-.552.241-.826.193-.616-1.324-.923-1.281-.169a61.456,61.456,0,0,1-.535,9.188c-.076.809-1,8.58,1.8,5.561,1.96-2.115,2.7-6.072,3.592-8.788.579-1.762,1.157-3.526,1.805-5.26a19.024,19.024,0,0,1,.857-1.964c.485-.953-.237-.763-.115-.233.855,3.731.207,8.47-.369,12.2-.1.656-.237,1.3-.387,1.949q-.094.385-.212.762c-.362,1.22-.132-.215.415.661-1.078-1.727-.8-5.24-.881-7.217a29.239,29.239,0,0,1,.279-6.142,5.873,5.873,0,0,1,.484-1.619c-.011.022-.446-.5-.249.37a10.257,10.257,0,0,1-.344,4.319,25.009,25.009,0,0,0-.749,7.67c.137,1.778.982,6.346,3.525,5.586,2.786-.831,3.237-7.039,3.712-9.5C45.837,40.429,46.432,36.163,47,31.9c.3-2.248.408-4.632.923-6.838l-1.611-.482a156.07,156.07,0,0,0-3.789,23.363c-.141,2.187-.661,7.021,1.877,7.981,1.687.638,4.22-1.283,5.192-2.62a5.212,5.212,0,0,0,.849-3.986c-.237-1.14-1.847-.657-1.611.482.5,2.392-3.852,6.467-4.541,3.027-.663-3.311.039-7.194.473-10.485.768-5.812,1.9-11.571,3.16-17.279.25-1.135-1.345-1.616-1.611-.482-.752,3.218-.895,6.711-1.352,9.989q-.577,4.134-1.3,8.242c-.513,2.9-.953,6.128-2.171,8.791-.911,1.989-1.664-1.035-1.853-1.862a16.774,16.774,0,0,1-.023-6.005c.32-2.223,1.08-4.238,1.009-6.524-.044-1.42-1.194-4.219-2.7-2.281a7.332,7.332,0,0,0-1.063,3.58,46.389,46.389,0,0,0,.152,9.889c.131,1.277.189,3.223,1.14,4.163.759.75,1.6.027,1.985-.75,1.842-3.743,1.651-9.541,1.547-13.622-.023-.918-.331-6.512-2.5-4.287-1.571,1.61-2.217,4.7-2.926,6.821a66.745,66.745,0,0,1-3.23,9.006q-.108.207-.232.4c-.473.778.424,1.119.4.562a22.154,22.154,0,0,1,.2-3.006c.281-3,.556-5.984.657-8.994.026-.762.251-2.172-.325-2.8-.537-.583-1.257-.146-1.511.486-1.282,3.175-1.8,6.753-2.952,10-.475,1.343-1.206,3.926-2.379,4.807.478-.358.488.415.291-.547a11.371,11.371,0,0,1-.156-1.829,96.758,96.758,0,0,1,1.007-15.036.832.832,0,0,0-1.641-.241c-.964,5.815-1.954,11.768-3.894,17.313a7.018,7.018,0,0,1-1.487,2.916c-.1.081.169.181.038-.037a4.291,4.291,0,0,1-.412-1.366c-.694-3.469-.26-7.352.088-10.833a53.557,53.557,0,0,1,1.1-7.052,4.529,4.529,0,0,1,.527-1.528c-.365.5-.75-.387-.474.131a4.113,4.113,0,0,1,.28.828,38.275,38.275,0,0,1,.946,9.965,29.8,29.8,0,0,1-.283,4.659,5.838,5.838,0,0,1-.369,1.439c-.141.321.464.6.2-.412-.945-3.578-.783-7.71-.87-11.4-.04-1.666-.056-3.333-.064-5,0-.632.218-1.885-.32-2.353-1.957-1.7-5.177,8.187-5.64,9.314q-2.5,6.1-4.848,12.278c-.412,1.079,1.2,1.546,1.611.481h0M51.675,37.314c-.836,3.14-1.732,6.269-2.764,9.339-.268.8-.555,1.591-.891,2.359a3.7,3.7,0,0,1-.361.7q1.117.8.935.092-.021-.294-.019-.589c-.021-1.418.22-5.715,1.746-2.794.43.825.5,1.562,1.212,2.13C56.173,52.267,66,24.3,66.875,21.331l-1.641-.241c.459,7.346.81,14.708.949,22.069.063,3.325.437,7.172-.354,10.43a.651.651,0,0,1-.09.239q1.244.069.635-.369-.335-.3-.674-.6c-1.074-.947-2.18-1.852-3.291-2.749-2.024-1.635-4.168-3.522-6.548-4.512-.773-.321-1.439.943-.812,1.515,2.463,2.248,6.068.846,8.479-.688,3.062-1.948,5.154-5.666,7.024-8.814,4.7-7.912,9.3-17.053,11.492-26.227a.841.841,0,1,0-1.611-.482C76.344,23.3,75.16,38.9,79.185,51.446c.331,1.032.973,2.359,2.178,2s1.794-2.415,2.228-3.462c1.152-2.788,2.368-5.507,3.623-8.241a57.232,57.232,0,0,0,2.214-5.782c.262-.787.5-1.584.738-2.38.112-.375.713-1.644.209-1.249l-1.226-.542A8.912,8.912,0,0,1,89,34.025c-.136,1.724-.265,3.447-.372,5.174a36.158,36.158,0,0,0-.085,8.04c.152.892.7,1.641,1.59,1.153,1.1-.6,1.422-3.524,1.878-4.654A71.138,71.138,0,0,1,98.29,32a15.572,15.572,0,0,1,1.063-1.5c.43-.521-.921-1.305-1.135-.633-.1.315-.232.623-.348.932-.786,2.116-1.488,4.272-2.162,6.433-.418,1.337-2.821,6.825-.818,7.711.88.389,1.681-1.22,2.054-1.771q2.021-2.991,4.137-5.9a31.966,31.966,0,0,1,3.012-3.8l-1.037-.772a6.426,6.426,0,0,1-.285.714c-.21.493-.433.98-.652,1.468-.574,1.275-1.157,2.545-1.711,3.83-.4.931-2.8,7.375.56,5.606,3.774-1.989,6.543-6.236,9.865-8.959a3.2,3.2,0,0,1,.69-.486q-.694-1.311-.84-.509-.18.423-.366.844a25.25,25.25,0,0,0-1.356,4.392c-.447,1.924-1.272,5.172-.4,7.093,1.606,3.526,6.5-6.449,7.18-7.548a20.552,20.552,0,0,1,1.7-2.529q-1.07-1.457-1.214-.463-.105.353-.231.7c-.357,1.03-.766,2.042-1.146,3.063-.864,2.32-1.71,4.651-2.5,7a.844.844,0,0,0,1.526.7q1.82-3.224,3.723-6.393c.771-1.284,1.541-2.588,2.418-3.791.109-.151.227-.293.347-.434.4-.467-.964-1.186-1.144-.514-.3,1.133-.827,2.219-1.22,3.316-.681,1.907-1.61,4.7-1.125,6.8.187.811.95,1.817,1.811,1.182,1.387-1.024,1.812-3.57,2.495-5.088.932-2.077,2-4.1,3.124-6.058l-1.526-.7q-1.288,4.3-2.417,8.657c-.384,1.489-2.247,6.214-.675,7.458,1.463,1.16,2.568-3.581,2.777-4.245,1.443-4.58,2.561-9.292,3.608-13.994a160.337,160.337,0,0,0,2.817-16.044c.2-1.7,1.161-6.165-1.086-7-1.844-.682-3.817,1.734-4.912,2.975a66.274,66.274,0,0,0-7.1,10.362,112.889,112.889,0,0,0-12.07,29.852c-.161.634-3.333,10.727-.461,10.187,1.06-.2.609-1.946-.444-1.748.892-.168.89.978.906.112a18.882,18.882,0,0,1,.5-3.306,119.316,119.316,0,0,1,4.274-15.833,98.617,98.617,0,0,1,14.238-26.713c.369-.484,4.226-5.233,4.659-3.873.468,1.471-.018,3.5-.182,4.981-.328,2.955-.835,5.888-1.374,8.8-1,5.384-2.227,10.723-3.629,16-.492,1.85-1.016,3.69-1.6,5.508-.2.608-.4,1.213-.639,1.8-.073.183-.157.359-.244.535-.269.544,1.077.895,1.083.244.025-2.644,1.137-5.556,1.815-8.063q.84-3.1,1.762-6.181a.844.844,0,0,0-1.526-.7c-1.006,1.757-1.938,3.565-2.819,5.4-.543,1.131-1.024,2.291-1.475,3.468a13.067,13.067,0,0,1-.591,1.457q.748.7.5,0a6.134,6.134,0,0,1-.007-.784c.057-2.836,1.411-5.486,2.292-8.082.258-.761.322-1.57-.48-1.929-1.378-.615-3.629,4.226-4.126,5.048q-1.911,3.161-3.723,6.394l1.526.7c.616-1.831,1.273-3.646,1.933-5.459.607-1.667,1.267-3.313,1.848-4.991a2,2,0,0,0,.08-1.6.822.822,0,0,0-.721-.449c-.856.048-1.382,1.133-1.828,1.8-1.251,1.87-2.382,3.838-3.558,5.764-.519.849-1.044,1.693-1.583,2.526-.785,1.212-.247.255-.114.746a4.978,4.978,0,0,1-.058-1.3,24.323,24.323,0,0,1,1.8-8.31c.293-.742,1.088-1.969.383-2.733-.661-.718-1.561-.054-2.153.4-2.86,2.223-5.289,5.1-7.986,7.548a12.268,12.268,0,0,1-1.592,1.26c.269-.174.159.771.446-.326a14.73,14.73,0,0,1,.559-1.6c.9-2.307,2.014-4.509,2.982-6.782.256-.6.693-1.959-.293-2.158-.946-.191-1.641.921-2.187,1.592-2.545,3.127-4.561,6.726-7.069,9.869l.961.476a2.929,2.929,0,0,1,.057-.512c.056-.358.142-.712.222-1.064.214-.94.484-1.866.751-2.789.66-2.279,1.409-4.531,2.19-6.765.307-.879,1.07-2.121.907-3.108a.893.893,0,0,0-1.564-.418c-2.191,2.083-3.714,5.607-5.152,8.288-.962,1.793-1.859,3.628-2.652,5.515-.322.767-.609,1.552-.862,2.348-.15.475-.274.96-.428,1.434l.925.44a5.663,5.663,0,0,1-.086-.838,67.482,67.482,0,0,1,.293-8.75c.107-1.608.934-4.578.348-6.145-.184-.49-.746-.919-1.227-.542-.938.736-1.16,2.955-1.5,4.046A99.8,99.8,0,0,1,83.79,45.079c-.82,1.871-1.5,3.817-2.37,5.662-.119.251-.253.49-.393.728-.322.544.138.292.034.117a10.435,10.435,0,0,1-.876-2.951,71.429,71.429,0,0,1,1.861-37.249L80.436,10.9c-1.894,7.927-5.745,15.575-9.524,22.6a52.037,52.037,0,0,1-6.187,9.555c-1.744,2.008-6.1,4.953-8.492,2.772l-.812,1.515c2.576,1.071,4.945,3.341,7.123,5.121.843.689,2.931,3.483,4.241,2.721.794-.462.826-1.968.912-2.785a57.6,57.6,0,0,0,.193-6.042c0-8.425-.458-16.867-.983-25.271a.832.832,0,0,0-1.641-.241A89.306,89.306,0,0,1,55.072,43.9a11.278,11.278,0,0,1-2.369,2.85c-.648.5-1.038-1.482-1.449-2.142-1.074-1.721-2.848-1.758-3.713.139-.607,1.332-1.391,5.174-.171,6.39,1.1,1.095,1.981-.925,2.322-1.744a91.668,91.668,0,0,0,3.6-11.6.841.841,0,1,0-1.612-.481h0m16.081,14.4c6.649-5.561,14.117-12.95,16.818-21.808l-1.611-.482c-.708,3.531-1.32,7.088-1.866,10.652-.675,4.4-1.694,9.379-.978,13.84.185,1.15,1.794.661,1.611-.482-.718-4.47.47-9.631,1.156-14.024q.746-4.77,1.689-9.5a.841.841,0,1,0-1.611-.482c-2.532,8.3-10.221,15.849-16.05,20.725-.841.7-.01,2.279.843,1.565Z"
        transform="translate(57.732 476.825)"
        fill="#fff"
      />
      <text
        id="SIGNATURE_D_AGENCE"
        transform="translate(71 475)"
        fill="#fff"
        fontSize="10"
        fontFamily="SegoeUI-Bold, Segoe UI"
        fontWeight="700"
      >
        <tspan x="0" y="0">
          SIGNATURE D&apos;AGENCE
        </tspan>
      </text>
      <line
        id="Line_3"
        x2="281"
        transform="translate(71 434.5)"
        fill="none"
        stroke="#fff"
        strokeWidth="1"
      />
    </g>
  </svg>
);
