export default function NewUser() {
    return (
        <div>
            <p>New User</p>
            <form>
                <input type="text" id="username" name="username" maxlength="10"></input>
                
                <input type="submit" value="Submit"></input>
            </form>

        </div>
    )
}