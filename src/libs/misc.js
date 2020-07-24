/* Unused for now, put this in component that will use it later */

const convertValenceToEmoji = (valence) => {
  if (valence < 0.1) return '😭';
  else if (valence < 0.2) return '😩';
  else if (valence < 0.3) return '☹️';
  else if (valence < 0.4) return '🙁';
  else if (valence < 0.5) return '😐';
  else if (valence < 0.6) return '🙂';
  else if (valence < 0.7) return '😀';
  else if (valence < 0.8) return '😄';
  else return '😁';
};
