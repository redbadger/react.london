export default function versionTxt(req, res) {
  const lastCommitSHA = process.env.GIT_COMMIT;
  res.header('Content-Type', 'text/plain')
    .status(200)
    .send(lastCommitSHA);
}
