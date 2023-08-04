import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';

// @ts-ignore
function SvgComponent(props) {
  return (
    <Svg width={132} height={125} viewBox="0 0 132 125" fill="none" {...props}>
      <Mask id="prefix__a" x={109} y={114} width={23} height={8}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M109.489 114.2h22.401v7.333h-22.401V114.2z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M109.489 114.2l1.835 7.333 20.567-.197s-2.813-2.217-13.147-2.056l-1.002-5.08h-8.253z"
          fill="#FFBE9D"
        />
      </G>
      <Path
        d="M87.772 36.338L72.6 37.763l-6.165 1.736a16.737 16.737 0 00-7.02 4.005L39.55 62.48 35.925 33 26 33.86l1.657 37.947c1.479 4.617 5.787 7.855 10.816 7.867 2.978.008 5.821-1.243 7.991-3.273l14.144-13.232-1.404 17.46-4.862 10.854L89.06 111s4.078-20.093 6.268-33.992C97.099 65.764 98 41.272 98 41.272l-10.228-4.934z"
        fill="#0F4C81"
      />
      <Path
        d="M97.373 41s7.506 2.833 9.32 8.819c1.61 5.307 6.979 35.157 6.979 35.157L119 116.568l-11.155.432L95 63.158 97.373 41z"
        fill="#0F4C81"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M59.012 80c-.103-.009.48-6.06 1.301-13.515.822-7.457 1.572-13.493 1.675-13.485.103.009-.48 6.059-1.301 13.516-.822 7.455-1.572 13.493-1.675 13.484zM83.998 65c.01.004-.024.104-.1.291l-.346.811c-.148.354-.342.781-.608 1.257-.261.479-.53 1.04-.91 1.613l-.573.915c-.202.317-.443.625-.675.956-.456.67-1.021 1.326-1.6 2.03a33.44 33.44 0 01-4.297 4.089 33.71 33.71 0 01-5.016 3.198c-.827.397-1.605.79-2.37 1.076-.38.148-.739.31-1.098.431-.358.12-.703.234-1.033.343-.654.235-1.27.367-1.801.509-.53.148-.997.236-1.38.299l-.88.148c-.202.03-.31.04-.311.03-.002-.011.1-.043.299-.094l.865-.207c.377-.08.837-.186 1.36-.35.524-.158 1.131-.303 1.774-.55l1.019-.36c.353-.127.707-.292 1.081-.445.755-.293 1.52-.692 2.335-1.092a35.113 35.113 0 004.954-3.188 34.8 34.8 0 004.27-4.03c.58-.692 1.148-1.336 1.61-1.994.235-.324.479-.626.684-.937.204-.31.4-.609.586-.896.39-.561.672-1.11.946-1.578.28-.465.49-.882.654-1.226.16-.313.293-.572.4-.784.096-.177.15-.27.161-.265z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.468 82.972c-1.107-.315-1.68-1.67-1.396-2.783.283-1.113 1.22-1.961 2.257-2.458 1.036-.497 2.183-.703 3.3-.976a27.687 27.687 0 0012.887-7.221c.328-.326.795-.687 1.2-.466.547.297.205 1.13-.2 1.6A41.619 41.619 0 0163.115 83"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M97.994 76c-.023.006-.109-.225-.243-.647a57.768 57.768 0 01-.53-1.799c-.428-1.523-.98-3.637-1.531-5.986a146.96 146.96 0 01-1.288-6.04 55.88 55.88 0 01-.323-1.843c-.068-.437-.094-.68-.07-.685.023-.004.093.23.2.66l.43 1.822 1.385 6.014 1.432 6.002.424 1.823c.095.431.137.673.114.679zM28.703 37c-.144.008-.35-.658-.462-1.486-.113-.829-.087-1.507.056-1.514.143-.007.35.658.463 1.486.111.829.086 1.506-.057 1.514zM31.63 37c-.144.004-.318-.664-.39-1.492-.072-.828-.013-1.503.13-1.508.144-.004.319.664.39 1.492.072.829.014 1.503-.13 1.508zM33.658 37c-.144.006-.33-.886-.418-1.99-.088-1.104-.043-2.004.101-2.01.143-.006.331.885.42 1.99.086 1.104.041 2.004-.103 2.01zM39.072 67c-.143-.01-.067-1.136.17-2.516.235-1.38.542-2.492.686-2.484.143.01.067 1.135-.17 2.517-.236 1.38-.543 2.492-.686 2.483zM110.067 114c.138-.014.444.646.683 1.474.239.829.321 1.512.183 1.526-.138.014-.443-.646-.683-1.474-.239-.829-.321-1.512-.183-1.526zM113.111 114c.142-.015.431.644.646 1.473.214.828.273 1.511.131 1.527-.141.015-.43-.644-.645-1.473-.215-.828-.274-1.512-.132-1.527zM117.101 113c.141-.007.341.663.575 1.485.232.822.413 1.494.277 1.514-.131.022-.536-.627-.771-1.464-.24-.837-.217-1.529-.081-1.535zM104 45.065c0 .058-.824.013-2.104.256-1.27.235-3.006.834-4.504 2.025-1.5 1.191-2.386 2.676-2.813 3.79-.438 1.122-.5 1.872-.563 1.864-.02-.002-.026-.189.01-.526.037-.338.131-.824.326-1.407.378-1.158 1.261-2.717 2.817-3.954 1.556-1.235 3.37-1.822 4.682-2.006a8.937 8.937 0 011.574-.103c.372.012.576.043.575.061z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M108 58.005c.014.039-.686.337-1.841.767-1.154.429-2.764.983-4.561 1.535a86.154 86.154 0 01-4.64 1.288c-1.198.293-1.947.439-1.958.398-.01-.043.718-.265 1.898-.611l4.606-1.373 4.581-1.446c1.171-.374 1.899-.6 1.915-.558zM113 79.01c.008.045-.767.255-2.027.554-1.261.3-3.006.69-4.938 1.103-1.933.411-3.686.765-4.959 1.005-1.273.239-2.066.365-2.076.319-.01-.046.763-.254 2.024-.554 1.26-.3 3.008-.691 4.941-1.103 1.934-.412 3.688-.766 4.961-1.006 1.273-.24 2.065-.364 2.074-.319zM118 106.164c-.001.052-.731.074-1.909.108-1.178.032-2.803.087-4.596.2-1.794.113-3.414.263-4.588.378-1.173.114-1.9.184-1.907.133-.006-.048.711-.208 1.881-.388a53.392 53.392 0 014.595-.486 53.546 53.546 0 014.615-.094c1.181.032 1.91.101 1.909.149zM68 80.996c-.023.038-.534-.174-1.347-.536l-3.174-1.418-3.183-1.4c-.815-.36-1.314-.595-1.295-.636.016-.04.549.123 1.39.431.84.309 1.987.768 3.233 1.32a55.393 55.393 0 013.138 1.505c.788.413 1.259.696 1.237.734zM94 84.998c-.01.019-.279-.076-.755-.264l-2.011-.806a240.951 240.951 0 00-6.669-2.577 245.316 245.316 0 00-6.76-2.367l-2.061-.692c-.486-.167-.75-.268-.744-.288.007-.02.286.043.784.174.5.131 1.216.336 2.097.602 1.763.53 4.179 1.32 6.808 2.286a122.28 122.28 0 016.643 2.665c.836.367 1.51.673 1.968.895.46.221.71.353.7.371zM95 66.995c-.002.012-.122.001-.35-.03l-.99-.147-3.636-.587c-3.069-.5-7.31-1.177-12.003-1.867a777.242 777.242 0 00-12.035-1.66l-3.651-.483-.992-.143c-.226-.036-.344-.06-.343-.071.001-.011.122-.008.35.007l1 .083c.865.078 2.118.207 3.663.38 3.092.345 7.357.88 12.055 1.568 4.696.691 8.935 1.403 11.995 1.96 1.53.28 2.767.515 3.619.69l.98.207c.223.05.34.082.338.093zM94 48.993c-.013.1-6.74-.937-15.023-2.315-8.286-1.377-14.99-2.573-14.977-2.672.013-.098 6.739.939 15.025 2.317 8.283 1.376 14.988 2.572 14.975 2.67zM57.996 65c-.04.017-.38-.765-.916-2.035l-2.095-4.957-2.14-4.937c-.55-1.264-.881-2.05-.842-2.07.02-.01.128.173.308.512.181.34.431.838.731 1.457a118.284 118.284 0 012.226 4.904 120.115 120.115 0 012.015 5.002c.242.647.43 1.173.552 1.541.123.367.18.574.161.583zM44.992 78c-.1.018-1.072-3.773-2.171-8.466-1.101-4.696-1.912-8.516-1.813-8.534.1-.019 1.072 3.772 2.172 8.467 1.1 4.694 1.911 8.515 1.812 8.533zM40 58.012c.019.104-2.652.854-5.965 1.675-3.315.823-6.016 1.405-6.035 1.301-.02-.104 2.651-.853 5.966-1.675 3.313-.823 6.015-1.405 6.034-1.301zM38 41.013c.006.035-.6.139-1.589.269-.99.13-2.36.282-3.881.416a95.477 95.477 0 01-3.904.265c-1.001.045-1.623.048-1.626.013-.004-.036.61-.104 1.605-.195l3.887-.34 3.886-.34c.996-.084 1.615-.124 1.622-.088z"
        fill="#FAFAFA"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.24 11c.175.353 4.76 24.484 4.76 24.484L36.187 36 32 15.25 42.24 11z"
        fill="#455A64"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.791 35L49 34.474l-4.567-23.376L43 11l4.791 24zM37.996 16.44a.5.5 0 11-.99.122.5.5 0 01.99-.123z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.38 33.03l-.166-3.231L40 27.807l-1.866-4.476c-.909-2.088-3.39-2.945-5.375-1.858l-1.92 1.052a5.535 5.535 0 00-2.723 3.577c-.623 2.638-1.17 8.138-1.112 7.89"
        fill="#FFBE9D"
      />
      <Path
        d="M22.597 114s-19.11 5.521-19.876 5.803c-1.152.423-.958 4.827.833 4.758.848-.033 14.679.538 16.426.424 1.748-.115 7.02-2.284 7.02-2.284L22.597 114z"
        fill="#0F4C81"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.966 121c-.086.013-.202-1.046-.754-2.15-.539-1.114-1.262-1.763-1.21-1.843.03-.077.88.488 1.458 1.676.588 1.181.578 2.325.506 2.317zM16.968 120c-.1.017-.307-.972-.85-2.065-.534-1.099-1.186-1.859-1.112-1.93.056-.069.854.615 1.417 1.772.57 1.153.632 2.217.545 2.223zM18.844 119.999c-.12-.005-.028-1.007-.553-2.118-.501-1.118-1.368-1.801-1.285-1.875.047-.076 1.105.543 1.653 1.753.564 1.204.28 2.269.185 2.24z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.238 117.694c-.04.009-.236-.555-.238-1.503a6.5 6.5 0 01.555-2.585c.072-.16.154-.345.356-.495.207-.169.584-.135.763.034.204.161.268.389.296.571.023.186.033.359.03.534a4.08 4.08 0 01-.139.989 5.705 5.705 0 01-.683 1.544c-.517.819-.966 1.239-.997 1.216-.051-.032.32-.503.765-1.326.217-.412.445-.918.582-1.502.068-.291.106-.602.107-.924-.01-.309-.006-.698-.205-.847-.106-.079-.201-.085-.294-.022-.098.068-.18.206-.243.353-.138.302-.25.601-.336.892a7.436 7.436 0 00-.294 1.577c-.065.914.036 1.486-.025 1.494zM19 117.193c-.009-.034.474-.188 1.29-.193.405-.001.893.039 1.418.161.259.065.537.127.817.279.274.129.56.482.451.847-.085.345-.403.586-.72.662a1.964 1.964 0 01-.896-.003c-.549-.116-.975-.367-1.3-.591-.64-.466-.953-.824-.928-.849.034-.04.414.265 1.064.668.328.195.738.405 1.227.493.243.043.505.056.741-.01.235-.06.43-.226.487-.44.057-.208-.078-.397-.297-.518-.214-.122-.48-.194-.726-.262a7.201 7.201 0 00-1.346-.218c-.783-.05-1.273.023-1.282-.026zM11.898 120.999c-.064-.01 0-.769-.257-1.602-.244-.839-.679-1.321-.638-1.389.021-.072.567.348.84 1.278.282.924.108 1.745.055 1.713zM26 122.006c.009.024-.26.167-.758.407-.502.218-1.238.522-2.178.773-1.872.54-4.54.847-7.472.811-2.934-.036-5.577-.19-7.493-.278l-2.269-.137c-.536-.041-.83-.076-.83-.102 0-.026.298-.04.834-.044l2.27.018 7.49.168c2.918.035 5.555-.226 7.42-.694 1.87-.44 2.963-.992 2.986-.922z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 122.451c-.026.039-.533-.234-1.39-.58-.846-.334-2.114-.734-3.507-.536-1.398.197-2.388 1.06-3.033 1.659-.65.621-1.03 1.034-1.068 1.005-.028-.022.288-.475.907-1.142.313-.329.71-.711 1.23-1.057a4.625 4.625 0 011.915-.747c1.494-.211 2.81.249 3.649.635.85.401 1.316.735 1.296.763z"
        fill="#263238"
      />
      <Path
        d="M43.773 108s18.21 11.816 18.862 12.305c.98.734-.144 4.23-1.843 3.625-.803-.286-16.082-4.499-17.726-5.132-1.643-.634-6.066-4.207-6.066-4.207L43.773 108z"
        fill="#0F4C81"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.01 117.999c-.072-.017.223-1.067 1.114-1.948.884-.89 1.866-1.117 1.875-1.036.031.092-.852.438-1.676 1.273-.836.822-1.232 1.753-1.312 1.711zM48.01 115.998c-.08-.03.287-.96 1.153-1.821.86-.866 1.803-1.245 1.835-1.167.048.085-.78.572-1.596 1.396-.824.816-1.303 1.637-1.391 1.592zM46.029 115c-.096.002.009-.974.912-1.872.891-.908 2.041-1.192 2.057-1.116.05.081-.95.465-1.77 1.305-.837.828-1.092 1.705-1.2 1.683zM46.813 112.698c-.06-.024.255-.532.522-1.405.13-.437.24-.965.27-1.557a5.983 5.983 0 00-.025-.925c-.013-.154-.048-.306-.124-.397-.074-.083-.176-.104-.316-.058-.263.085-.4.45-.523.738-.117.3-.191.602-.227.892-.07.584-.018 1.12.059 1.564.162.892.378 1.433.314 1.45-.042.012-.357-.501-.598-1.409a4.861 4.861 0 01-.149-1.631 3.72 3.72 0 01.445-1.454.973.973 0 01.517-.455c.25-.109.655-.04.81.175.156.195.174.391.19.56.029.335.029.66.002.967a5.84 5.84 0 01-.368 1.603c-.349.887-.76 1.361-.799 1.342z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47 112.884c-.024.049-.451-.179-1.186-.369a6.244 6.244 0 00-1.305-.189c-.248-.004-.514-.012-.749.051-.239.058-.423.215-.436.449a.705.705 0 00.308.613c.196.142.44.208.678.239.476.059.92-.034 1.28-.136.726-.221 1.17-.423 1.19-.371.014.035-.386.312-1.122.601-.367.135-.839.266-1.38.218-.264-.026-.556-.09-.823-.274a1.036 1.036 0 01-.452-.916c.015-.417.39-.698.681-.748.306-.073.58-.052.839-.039.52.034.98.144 1.353.27.748.259 1.143.568 1.123.601zM58.42 123.997c-.017.032-.25-.205-.364-.784-.124-.565-.046-1.434.279-2.195a8.72 8.72 0 01.498-1.011c.163-.293.332-.559.505-.736.173-.183.352-.265.476-.27.124-.008.188.034.186.054 0 .056-.266.029-.541.409-.14.181-.279.434-.43.738-.152.301-.318.629-.463.988-.302.713-.391 1.45-.327 1.972.054.524.216.8.181.835zM52.03 119c-.074.01-.052-1.015.563-1.934.606-.929 1.4-1.139 1.406-1.046.03.1-.646.435-1.19 1.275-.556.825-.697 1.725-.78 1.705z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39 115.001c.017-.02.295.196.8.579.513.373 1.265.896 2.246 1.449a28.733 28.733 0 003.566 1.672c1.379.542 2.925 1.053 4.56 1.552 3.277.993 6.242 1.901 8.382 2.58l2.53.819c.596.2.922.321.916.344-.006.023-.344-.056-.95-.217-.66-.185-1.52-.426-2.558-.715-2.157-.62-5.13-1.491-8.41-2.485-1.638-.501-3.191-1.024-4.575-1.585-1.384-.565-2.596-1.169-3.57-1.755a17.878 17.878 0 01-2.211-1.554c-.486-.417-.739-.669-.725-.684z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 115.511c-.009-.036.54-.247 1.474-.409.92-.151 2.314-.229 3.657.467.666.344 1.194.869 1.566 1.402.377.534.627 1.069.814 1.52.367.91.518 1.495.484 1.508-.044.02-.27-.542-.68-1.411-.413-.846-1.067-2.083-2.322-2.733-1.252-.65-2.582-.619-3.49-.528-.924.102-1.492.234-1.503.184z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M86.812 13.276l1.18 24.17c.2 4.11-3.037 7.554-7.1 7.554-3.793 0-6.917-3.02-7.1-6.854-.088-1.82-.164-3.337-.184-3.523 0 0-6.105-.276-6.84-6.343-.356-2.932-.603-9.033-.763-14.554-.172-5.93 4.188-10.997 10.01-11.647l.58-.064c6.282-.328 10.066 4.892 10.217 11.261z"
        fill="#FFBE9D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M73 34.324s4.04-.119 8-3.324c0 0-1.45 4.871-7.834 5L73 34.324z"
        fill="#EB996E"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M68.003 17.06c.039.55.518.97 1.069.938a.985.985 0 00.925-1.056 1.014 1.014 0 00-1.067-.94.986.986 0 00-.927 1.057zM68.016 15.99c.105.089.63-.408 1.444-.496.813-.102 1.455.257 1.533.146.038-.05-.077-.22-.358-.384a2.05 2.05 0 00-1.24-.242c-.506.06-.912.298-1.135.52-.23.224-.295.415-.244.455zM77.003 16.06c.04.55.518.971 1.069.938a.984.984 0 00.925-1.056 1.015 1.015 0 00-1.067-.94.986.986 0 00-.927 1.057zM77.016 14.99c.105.09.631-.407 1.445-.496.811-.102 1.454.258 1.532.146.038-.05-.076-.22-.358-.384a2.049 2.049 0 00-1.24-.242c-.506.06-.911.298-1.136.52-.228.224-.294.416-.243.455zM74 22.825c-.001-.054-.482-.09-1.258-.106-.196.002-.384-.02-.431-.18-.061-.166-.003-.433.066-.724l.41-1.892c.565-2.693.95-4.896.862-4.923-.088-.027-.617 2.134-1.182 4.826l-.385 1.9c-.05.281-.148.606-.017.95.068.17.222.28.35.305.129.03.238.017.335.012.774-.054 1.251-.115 1.25-.168zM76.776 23c-.157.009-.044 1.042-.853 1.873-.808.833-1.93.838-1.923.984-.007.066.27.173.74.135a2.62 2.62 0 001.61-.763c.494-.51.66-1.134.65-1.563-.009-.436-.153-.679-.224-.666zM76.008 11.89c.112.234.963.02 1.992.03 1.029-.01 1.88.205 1.992-.03.048-.113-.119-.327-.475-.526-.353-.2-.9-.363-1.517-.364-.617 0-1.164.165-1.518.364-.356.2-.523.413-.474.525zM68.032 12.947c.177.158.758-.08 1.483-.157.721-.1 1.355-.012 1.473-.207.052-.093-.067-.258-.357-.396-.285-.138-.745-.229-1.242-.168-.497.062-.91.26-1.14.461-.233.203-.295.39-.217.467z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M87 17.34c.09-.053 3.687-1.58 3.984 2.303.297 3.883-3.585 3.387-3.6 3.276-.015-.111-.384-5.58-.384-5.58z"
        fill="#FFBE9D"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M88.004 21.672c.02-.016.087.05.232.1.142.05.38.074.622-.033.488-.215.85-1.01.806-1.834a2.537 2.537 0 00-.326-1.118c-.172-.322-.416-.538-.673-.562a.425.425 0 00-.472.254c-.054.132-.016.22-.04.23-.013.012-.109-.068-.086-.26a.503.503 0 01.164-.299.65.65 0 01.45-.15c.37-.003.726.296.924.642.219.346.367.78.392 1.248.044.92-.377 1.816-1.05 2.057a.927.927 0 01-.769-.064c-.157-.101-.19-.201-.174-.21z"
        fill="#EB996E"
      />
      <Mask id="prefix__b" x={68} y={0} width={22} height={21}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M68.369.392h21.085v20.486H68.37V.392z"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#prefix__b)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M89.218 16.58c-.658-.082-1.701.619-1.908 1.238-.207.62-.192 1.294-.399 1.913-.206.62-.761 1.22-1.42 1.14-.454-.055-.816-.428-.981-.847-.165-.42-.17-.881-.163-1.33.032-1.955.23-3.912.091-5.862-.14-1.95-.647-3.937-1.87-5.479-1.224-1.543-3.266-2.552-5.22-2.183-1.295.246-2.417 1.045-3.694 1.364-1.514.378-3.2.021-4.421-.937-.157-.123-.86-.477-.86-.477-.012-.1-.013-.972.298-1.324C70.982 1.178 75.547.023 79.041.495c3.493.472 6.945 2.485 8.759 5.457s1.868 7.373 1.418 10.628z"
          fill="#263238"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 113.096s44.883-29.844 46.721-30.465c1.838-.62 6.28-3.571 10.72-2.329 4.442 1.242 8.424 5.279 10.415 11.179C90.847 97.38 91 110.577 91 110.577s-3.522 10.402-10.414 12.576a17.8 17.8 0 01-1.794.456c-8.413 1.692-16.968-2.229-21.677-9.496l-1.001-1.545s-29.361 10.935-29.82 10.779L21 113.096z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.554 79.059S.024 81.02 0 87.184C-.044 98.988 24.001 112 24.001 112L56 90.93v-2.213S14.81 73.999 5.554 79.059z"
        fill="#263238"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M77 105.587s-.082.041-.247.108l-.738.292-2.86 1.096-10.623 3.984c-4.513 1.676-9.919 3.669-15.984 5.866-6.066 2.194-12.788 4.604-19.966 7.023l-.13.044-.064-.121-3.523-6.698-1.796-3.415-.069-.132.125-.079L55.52 91.82l10.333-6.488 2.806-1.743c.313-.19.556-.34.732-.446.166-.1.255-.143.255-.143s-.077.062-.237.17l-.717.471-2.774 1.794-10.278 6.572-34.34 21.82.056-.211 1.796 3.415 3.52 6.699-.193-.078c7.174-2.413 13.9-4.811 19.97-6.988l16.007-5.799 10.658-3.892 2.878-1.042c.32-.113.568-.201.75-.264.168-.058.257-.08.257-.08z"
        fill="#455A64"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 101.999c-.014.018-.304-.188-.817-.577a90.82 90.82 0 01-2.144-1.686 180.973 180.973 0 01-6.862-5.843 180.77 180.77 0 01-6.582-6.185 95.514 95.514 0 01-1.924-1.954c-.447-.469-.686-.737-.67-.753.014-.017.283.219.756.66l1.992 1.873a349.181 349.181 0 006.636 6.107 350.608 350.608 0 006.795 5.91l2.08 1.769c.489.42.753.661.74.679zM14 83.09c-.013-.09 1.458-.244 3.175.31 1.722.538 2.878 1.525 2.823 1.593-.055.093-1.256-.73-2.918-1.248-1.657-.534-3.081-.545-3.08-.656z"
        fill="#455A64"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.002 81.01c.03-.086 1.087.416 1.956 1.588.878 1.165 1.11 2.388 1.026 2.401-.096.036-.456-1.074-1.288-2.172-.818-1.11-1.747-1.724-1.694-1.818z"
        fill="#455A64"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 119.034c-.018-.038.428-.117.923.256.487.357.9 1.071 1.034 1.903a3.454 3.454 0 01-.326 2.097c-.253.498-.532.732-.563.708-.049-.031.147-.307.324-.795a3.923 3.923 0 00.204-1.963c-.122-.765-.465-1.425-.846-1.774-.38-.365-.757-.378-.75-.432z"
        fill="#263238"
      />
    </Svg>
  );
}

const SvgPerson = React.memo(SvgComponent);
export default SvgPerson;
