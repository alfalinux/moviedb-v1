const HeaderIcons = (props) => {
  return (
    <div className="flex flex-col justify-center align-middle cursor-pointer hover:text-yellow-400 transition-all duration-300">
      <div className="w-10 h-10 self-center p-2">{props.icon}</div>
      <p className="text-center font-bold">{props.title}</p>
    </div>
  );
};

export default HeaderIcons;
