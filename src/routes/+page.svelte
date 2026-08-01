<script lang="ts">
  const name = "Aly Hazamy";
  const role = "3rd Year CS Student";
  const location = "Indonesia";
  const email = "alyhazamy@protonmail.com";
</script>

<main>
  <header>
    <h1>{name}</h1>
    <p>{role} based in {location}</p>
    <p>Interests: Developer tooling, Backend, Practice over theory</p>
    <p>Contact: <a href="mailto:{email}">{email}</a></p>
  </header>

  <hr />

  <section>
    <h2>Featured Project</h2>
    <p>
      <strong>fuzzies:</strong> High-performance Rust crate combining FSTs and
      Levenshtein automata for memory-mapped fuzzy search.
    </p>

    <p>
      <a href="/project/fuzzies">Explore Fuzzies Project Page &rarr;</a>
    </p>
  </section>

  <section>
    <h2>Tech Stack</h2>
    <ul>
      <li>Languages: Rust, Go</li>
      <li>Databases: PostgreSQL</li>
      <li>Tools: Docker, Git</li>
      <li>Currently Learning: Assembly, Svelte</li>
    </ul>
  </section>
</main>
