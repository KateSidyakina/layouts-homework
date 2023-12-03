export default function IconSwitch({icon, onSwitch}) {
  return (
    <span className="icon material-icons" onClick={() => onSwitch(icon === 'view_module' ? 'view_list' : 'view_module')}>
      {icon}
    </span>
  )
}