import Search from "./Search";
import WeatherStatus from "./WeatherStatus";

export default function CardBackground({ status }: { status: string }) {
  let backgroundImageUrl;

  switch (status) {
    case "":
      backgroundImageUrl =
        "https://imgs.search.brave.com/i8xvugWeYuwfP0oVthneVAmxlaPXUlx632rmiaW6TeU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zdW4td2l0aC1z/dW4tcmF5cy1ibHVl/LXNreS13aXRoLWNs/b3Vkc18xMDQzMzct/NTQ5Mi5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw";
      break;
    case "cloudy":
      backgroundImageUrl =
        "https://imgs.search.brave.com/maBC4aFgqm6Xtny3J8ryfNg2ykM-q3EsZrPAMsaQuBw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/Mzg4MzI5MS9waG90/by9zdG9ybXktY2xv/dWR5LXNraWVzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1C/NEp0cXI5TmZ3X010/bktobzRBbnJXZ3Ix/MmNSSkNfUTR5U3Jw/bVRNaW5vPQ";
      break;
    case "downpour":
      backgroundImageUrl =
        "https://imgs.search.brave.com/ou410BXgTJ36FQ74hXKyy23c_QTcAZjQIePKSIjB0_Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly92aHgu/aW1naXgubmV0L2Ny/aXRlcmlvbmNoYW5u/ZWxjaGFydGVyc3Uv/YXNzZXRzLzRlZDRl/MjY2LWIzNjYtNDNm/YS1iMjEwLTQwZTVl/ZWJmZjdmYS03ODRm/M2MwOS5qcGc_YXV0/bz1mb3JtYXQsY29t/cHJlc3MmZml0PWNy/b3AmaD03MjAmcT03/NSZ3PTEyODA";
      break;
    case "night":
      backgroundImageUrl =
        "https://imgs.search.brave.com/FAjrYz38Rjjyl9hymr-Y0BKnWLSFHtz-RlECxiUgkq0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTIx/MDExNjUyL3Bob3Rv/L25pZ2h0LXNjZW5l/LW1pbGt5LXdheS1i/YWNrZ3JvdW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1H/MllvSEJCc3dWdEhn/eWNxbHRyYmdzWjll/bHR4dDA2WW04NUpw/NW5mZDV3PQ";
      break;
    case "partly-sunny":
      backgroundImageUrl =
        "https://imgs.search.brave.com/Og74KoBKSakchgPd-70iAMoc2r3kpzjwokEm5SLn5oE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93cGNk/bi51cy1lYXN0LTEu/dmlwLnRuLWNsb3Vk/Lm5ldC93d3cua2xr/bnR2LmNvbS9jb250/ZW50L3VwbG9hZHMv/MjAyMC8wNC9jbG91/ZDEuanBn";
      break;
    case "shower":
      backgroundImageUrl =
        "https://imgs.search.brave.com/QYDYsvRJ_0KMXlnzeJA9E3meIrh7I2nCR1VK_47mtYY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTIy/Nzk1MjMyL3Bob3Rv/L3JhaW4td2F0ZXIt/ZHJvcC1mYWxsaW5n/LXRvLXRoZS1mbG9v/ci1pbi1yYWlueS1z/ZWFzb24uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVIyZ3B6/d2JGOWJxWklfdkRN/UXF6M0plMjJaSDk0/RDF1UFlsZ3R5N0hm/NnM9";
      break;
    case "snowy":
      backgroundImageUrl =
        "https://imgs.search.brave.com/AVRUlk9RDuY1OOkKx1hyBb3Qk-LM_6DH0trFOov1yZ8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDI2MDEwOTgtOGZj/MTE0ZTE0OGUyP3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4Tkh4OGMyNXZk/eVV5TUhOMGIzSnRm/R1Z1ZkRCOGZEQjhm/SHd3";
      break;
    case "stormy":
      backgroundImageUrl =
        "https://imgs.search.brave.com/Nvas6Yp4wkpjdd-jz8mer8OMFmYwlgqOWDNrH_8Fp9I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTY2/NDQ2NjgyL3Bob3Rv/L3N0b3JteS1zZWEu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWNmUXppUWl5VU9W/aDZtcjNmS1lBMm5z/bGZ1TlFfSlJMUjBw/Skp0dnZQRUE9";
      break;
    case "sunny":
      backgroundImageUrl =
        "https://imgs.search.brave.com/i8xvugWeYuwfP0oVthneVAmxlaPXUlx632rmiaW6TeU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zdW4td2l0aC1z/dW4tcmF5cy1ibHVl/LXNreS13aXRoLWNs/b3Vkc18xMDQzMzct/NTQ5Mi5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw";
      break;
    case "windy":
      backgroundImageUrl =
        "https://imgs.search.brave.com/wu0oe0e1HhVscpZ4PTlJRKS23lDM0SflO6HwdYfW5EM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0Lzk5Lzk2LzE4/LzM2MF9GXzQ5OTk2/MTg0OV9SVFBqWEhF/Q1VIQmk0WDlacnBW/VHhiMzBFc3gwYnZJ/cS5qcGc";
      break;
    case "foggy":
      backgroundImageUrl =
        "https://imgs.search.brave.com/XgIOIF1dpAZX_exANTiPDKh305woG_3_i7SIVmBQNbU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MjQyNTI1MDAzNDgt/MWJiMDdiODNmM2Jl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFpt/OW5aM2tsTWpCM1pX/RjBhR1Z5ZkdWdWZE/QjhmREI4Zkh3dw.jpeg";
      break;
  }

  return (
    <>
      <div
        className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
        <Search />
        <WeatherStatus city="Pokhara" status={status} />
      </div>
    </>
  );
}
