def vowelSearch(phrase: str) -> set:
    """Return any vowels found in an asked-for phrase."""
    vowels = set('aeiou')
    return vowels.intersection(set(phrase))


def letterSearch(phrase: str, letters: str='aeiou') -> set:
    """ search and return any specified letters in the supplied phrase"""
    return set(letters).intersection(set(phrase))