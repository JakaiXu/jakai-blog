
import classNames from "classnames";
import { Link } from "react-router-dom";
const FooterTable = () => {
  const linkClass = classNames(
    "cursor-pointer hover:underline hover:text-orange-500 hover:decoration-orange-500 cursor-pointer sm:mr-[5rem]"
  );
  return (
    <table className="text-left text-white">
      <thead>
        <tr className="grid grid-cols-3 gap-8 sm:text-2xl pb-5 text-gray-300">
          <th className="mr-[10%]">Navigation</th>
          <th className="mr-[10%]">Serices</th>
          <th className="mr-[10%]">Social Media</th>
        </tr>
      </thead>
      <tbody className="sm:text-[100%]">
        <tr className="grid grid-cols-3 gap-8 pb-3">
          <td className={linkClass}>
            <Link to="/">Home</Link>
          </td>
          <td className={linkClass}>
            <Link to="experience">Development </Link>
          </td>
          <td className={linkClass}>
            <a href="https://www.linkedin.com/in/jakai-xu-011594236/">
              LinkedIn
            </a>
          </td>
        </tr>
        <tr className="grid grid-cols-3 gap-8 pb-3">
          <td className={linkClass}>
            <Link to="about">About</Link>
          </td>
          <td className={linkClass}>Digital Web</td>
          <td className={linkClass}>
            <a href="https://twitter.com/home">Twitter </a>
          </td>
        </tr>
        <tr className="grid grid-cols-3 gap-8 ">
          <td className={linkClass}>
            <Link to="experience">Experience </Link>
          </td>
          <td className={linkClass}>Components</td>
          <td className={linkClass}>
            <a href="https://www.facebook.com/">FaceBook</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default FooterTable;
