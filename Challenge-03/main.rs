use minreq;

fn main() {
    let url = "https://codember.dev/colors.txt";
    let response = match minreq::get(url).send() {
        Ok(res) => res,
        Err(e) => {
            println!("Error: {}", e);
            return;
        }
    };

    let arr_str = response.as_str().expect("Error in transform a to arr");
    let parsed_arr: Vec<&str> = arr_str
        .trim_matches(|c| c == '[' || c == ']')
        .split(',')
        .collect();

    println!(
        "response: {:?}",
        parsed_arr
            .into_iter()
            .for_each(|color| println!("color is {}", color))
    );
}
