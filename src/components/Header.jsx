import PropsType from 'prop-types'

const Header = ({header}) => {
  return (
    <h4 className="text-center mt-5 mb-1">{header}</h4>
  )
}

Header.propTypes = {
  header: PropsType.string.isRequired
}

export default Header