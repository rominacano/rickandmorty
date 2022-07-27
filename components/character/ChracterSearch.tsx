import { useState } from "react";
import { useRouter } from "next/router";
import { Collapse, Container, Input, Radio, Spacer } from "@nextui-org/react";

export const ChracterSearch = () => {
  const { push } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    const query = `name=${searchTerm}&status=${status}`;
    push(`/search/${query}`);
  };

  const onFilter = (value: string) => {
    setStatus(value);
    const query = `name=${searchTerm}&status=${value}`;
    push(`/search/${query}`);
  };

  return (
    <Container css={{ display: "block", justifyContent: "center", mt: 90 }}>
      <Input
        bordered
        placeholder="Buscar personaje"
        width="100%"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
      />
      <Spacer x={2} />
      <Collapse bordered title="Estado" subtitle="Filtro por estado">
        <Radio.Group
          defaultValue=""
          css={{ p: 10 }}
          onChange={(value) => onFilter(value)}
        >
          <Radio value="Alive" isSquared>
            Alive
          </Radio>
          <Radio value="Dead" isSquared>
            Dead
          </Radio>
          <Radio value="unknown" isSquared>
            Unknown
          </Radio>
        </Radio.Group>
      </Collapse>
    </Container>
  );
};
