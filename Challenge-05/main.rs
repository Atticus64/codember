use minreq;

#[derive(Clone, Debug)]
struct Player {
    idx: usize,
    name: String,
    is_alive: bool,
}

fn main() {
    let url = "https://codember.dev/mecenas.json";
    let resp = match minreq::get(url).send() {
        Ok(data) => data,
        Err(e) => {
            println!("{}", e);
            return;
        }
    };
    let arr_string = resp.as_str().expect("Error to read response");
    let players_arr: Vec<Player> = arr_string
        .trim_matches(|c| c == '[' || c == ']')
        .split(",")
        .enumerate()
        .map(|(i, s)| Player {
            name: String::from(s),
            idx: i,
            is_alive: true,
        })
        .collect();

    println!("{:?}", hunger_games(players_arr));
}

fn hunger_games(players: Vec<Player>) -> Vec<Player> {
    return (&players[0..1]).to_vec();
}
