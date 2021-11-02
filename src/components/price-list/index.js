import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss';

function PriceList() {
  const settings = {
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    dots: false,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 999999,
        settings: "unslick",
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          variableWidth: true,
        }
      },
    ]
  };

  const licenses = [
    {
      name: "Basic Lease",
      price: 19.99,
      items: "Untagged MP3",
      terms: [
        "Sell up to 5,000 units",
        "100,000 Online Audio Streams",
        "-",
        "1 Commercial Use",
        "Non-Profit Live Performances only",
        "No Radio Broadcasting rights",
        "-",
        "Must give credit (Prod. Connection)",
        "Connection Beats still has full rights",
      ],
    },
    {
      name: "Standard Lease",
      price: 39.99,
      items: "Untagged WAV",
      terms: [
        "Sell up to 10,000 units",
        "500,000 Online Audio Streams",
        "-",
        "1 Commercial Use",
        "For Profit Live Performances",
        "No Radio Broadcasting rights",
        "-",
        "Must give credit (Prod. Connection)",
        "Connection Beats still has full rights",
      ],
    },
    {
      name: "Premium Lease",
      price: 69.99,
      items: "Trackouts + WAV",
      terms: [
        "Unlimited Distribution",
        "-",
        "1 Commercial Use",
        "For Profit Live Performances",
        "Radio Broadcasting rights",
        "-",
        "Must give credit (Prod. Connection)",
        "Connection Beats still has full rights",
      ],
    },
    {
      name: "Unlimited Lease",
      price: 99.99,
      items: "Trackouts + WAV",
      terms: [
        "Unlimited Distribution",
        "-",
        "Unlimited Commercial Use",
        "For Profit Live Performances",
        "Radio Broadcasting rights",
        "-",
        "Connection Beats still has full rights",
      ],
    },
    {
      name: "Exclusive",
      price: 499.99,
      items: "Trackouts + WAV",
      terms: [
        "Unlimited Distribution",
        "-",
        "Unlimited Commercial Use",
        "For Profit Live Performances",
        "Radio Broadcasting rights",
        "-",
        "You have full rights",
      ],
    },
  ];

  return (
    <div className="price-list">
      <h2 className="price-list__heading">Licensing Info</h2>
      <div className="price-list__slider-holder">
        <Slider className="price-list__slider" { ...settings }>
          { licenses.map((license, licenseIndex) => {
            return (
              <div className="price-list__card" key={ licenseIndex }>
                <span className="price-list__name">{ license.name }</span>
                <h4 className="price-list__price">${ license.price }</h4>
                <span className="price-list__items">{ license.items }</span>
                <ul className="price-list__terms">
                  { license.terms.map((term, termIndex) => {
                    if (term === "-") {
                      return (
                        <li className="price-list__term price-list__term--separator" key={ termIndex }></li>
                      );
                    } else {
                      return (
                        <li className="price-list__term" key={ termIndex }>{ term }</li>
                      );
                    }
                  }) }
                </ul>
              </div>
            );
          }) }
        </Slider>
      </div>
    </div>
  );
}

export default PriceList;
