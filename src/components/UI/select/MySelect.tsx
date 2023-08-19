export default function MySelect({
  defaultValue,
  options,
  value,
  onChange,
}: {
  options: Record<string, string>[];
  defaultValue: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="244" disabled>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
