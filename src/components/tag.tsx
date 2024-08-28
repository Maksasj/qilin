const Tag = ({ color, label }: { color: string, label: string }) => {
  return (
    <div style={{backgroundColor: color}} className="nue-tag">
      {label}
    </div>
  );
};

export default Tag;
  