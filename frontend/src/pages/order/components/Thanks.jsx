import smiley from "../../../assets/smiley.png"

function Thanks({ user, showMessage }) {
  return (
    <div className="Merci">
      {showMessage && (
        <p>
          {user && `Merci, ${user.firstName} `} <img src={smiley} alt="" /> à
          bientot pour de nouvelles aventures.
        </p>
      )}
    </div>
  )
}

export default Thanks
