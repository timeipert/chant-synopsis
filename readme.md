# Chant Synopsis

You can use the app at: https://chantsynopsis.web.app/


Chant Synopsis is a tool for generating visualizations of monophonic chants by layering multiple sequences above each other. It provides an easy-to-perceive view of where there are uncertain phrases and where there is stability across all passages. Inspired by synoptic viewers from multiple-sequence alignment approaches in bioinformatics, Chant Synopsis adapts these concepts to the specific requirements of musical notation for monophonic chant.

## Features

- **Multiple Sequence Layering**: Visualize multiple sequences of Volpiano notation layered on top of one another.
- **Uncertainty and Stability Visualization**: Clearly see areas of uncertainty and stability across different chant passages.
- **Variant Selection**: Display a single variant or highlight specific variants for focused analysis.
- **Musical Notation Adaptation**: Combines bioinformatics alignment techniques with the unique aspects of monophonic chant notation.

## How It Works

Chant Synopsis takes multiple versions of a chant, represented in Volpiano notation, and aligns them in a synoptic viewer. This allows users to easily compare different versions and identify areas of variation or stability.

### Key Components

- **Volpiano Notation Input**: Input your chant sequences using Volpiano notation in a FASTA file format.
- **Alignment View**: Automatically aligns multiple chant variants, displaying them in a layered format.
- **Highlight and Solo Options**: Options to highlight or solo specific variants for detailed analysis.

##Input Format

Chant Synopsis expects input in the form of a FASTA file containing Volpiano notation strings. A FASTA file typically looks like this:


```
> Variant1
e---e--f--g--

> Variant2
e---e--f--g--

> Variant3
e---e--f--a--
```

Each variant is preceded by a header line (starting with >), followed by the sequence in Volpiano notation.
