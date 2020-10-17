
import Link from 'next/link';
export default function NewTest() {
    return (
        <div>
            <p>New Test</p>
            <form>
                <input type="text" id="username" name="username" maxlength="10"></input>
                
                <input type="submit" value="Submit"></input>
            </form>

        </div>
    )
}