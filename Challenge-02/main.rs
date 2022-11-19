extern crate minreq;
const ASCII_Z: u8 = 122;
const ASCII_A: u8 = 97;

fn main() {
    let url = "https://codember.dev/encrypted.txt";
    let res = match minreq::get(url).send() {
        Ok(res) => res,
        Err(e) => {
            println!("Something bad happens: {e}");
            return;
        }
    };

    let code = res.as_str().expect("Something failed");
    let coded_msg = String::from(code);
    println!("🔒 Coded message -> {}", coded_msg);

    let result: Vec<String> = coded_msg
        .split(' ')
        .map(|word| decrypt_word(word))
        .collect();

    println!("🔓🔑 Decoded message -> {}", result.join(" "));
    println!("Los criminales han sido detenidos! 🎉 ");
}

/// This function will return a decoded msg
/// receive a str of numbers -> "11688123"
fn decrypt_word(word: &str) -> String {
    let arr: Vec<u8> = word.as_bytes().to_vec();
    let mut new_word = String::from("");
    let mut decoded_word: String = String::from("");
    for c in arr {
        new_word.push(c as char);
        let ascii_value: u8 = new_word.parse().expect("failed to convert String to u8");
        if ascii_value <= ASCII_Z && ascii_value >= ASCII_A {
            decoded_word.push(ascii_value as char);
            new_word = String::from("");
        }
    }
    return decoded_word;
}

// tests!
#[cfg(test)]
mod tests {
    #[test]
    fn check_words() {
        let first_word = super::decrypt_word("109105100117");
        let second_word = super::decrypt_word("9911110010110998101114");
        assert_eq!(first_word, "midu");
        assert_eq!(second_word, "codember");
    }
}
